import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z2z-7--xo.css';
import '../../css/t/tka0kcvop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="z2z-7--xo"/><path class="tka0kcvop"/></g>`,
		"fallback": "hugeicons:skool",
	});
}

export default Component;
