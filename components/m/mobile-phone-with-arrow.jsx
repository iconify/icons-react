import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gubo20bln.css';
import '../../css/c/ctt437wpu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gubo20bln"/><path class="ctt437wpu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mobile-phone-with-arrow",
	});
}

export default Component;
