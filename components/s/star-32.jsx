import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6a_pikrc.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGcP3DbAMX)" class="c6a_pikrc"/><defs><linearGradient id="SVGcP3DbAMX" x1="28.999" x2="2.157" y1="28.557" y2="3.34" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:star-32",
	});
}

export default Component;
