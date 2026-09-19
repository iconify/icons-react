import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/x/xtthexbok.css';
import '../../css/q/qy8-hybaj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="xtthexbok"/><path class="qy8-hybaj"/>`,
		"fallback": "ant-design:smile-twotone",
	});
}

export default Component;
