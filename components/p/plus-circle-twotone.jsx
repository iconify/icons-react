import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/c/cdyq_jbmi.css';
import '../../css/i/ib167_bsp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="cdyq_jbmi"/><path class="ib167_bsp"/>`,
		"fallback": "ant-design:plus-circle-twotone",
	});
}

export default Component;
