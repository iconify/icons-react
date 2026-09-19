import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vacdpd01p.css';
import '../../css/m/mhlaslbyy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vacdpd01p"/><path class="mhlaslbyy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:waxing-gibbous-moon",
	});
}

export default Component;
