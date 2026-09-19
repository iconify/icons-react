import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c804oiq9p.css';
import '../../css/z/zg7144nsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="c804oiq9p"/><ellipse class="zg7144nsh"/></g>`,
		"fallback": "hugeicons:trampoline",
	});
}

export default Component;
