import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/a/a-ahklbmq.css';
import '../../css/i/ioh29v_qh.css';
import '../../css/h/h9k680llf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="a-ahklbmq"/><path class="ioh29v_qh"/><path class="h9k680llf"/>`,
		"fallback": "ant-design:trademark-circle-twotone",
	});
}

export default Component;
