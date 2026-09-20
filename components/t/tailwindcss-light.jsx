import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/p/p5pm383he.css';
import '../../css/r/rbd44pbxc.css';
import '../../css/l/la6_wwaeu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path fill="url(#SVGdgekOdZf)" clip-rule="evenodd" class="p5pm383he"/><defs><linearGradient id="SVGdgekOdZf" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop class="rbd44pbxc"/><stop offset="1" class="la6_wwaeu"/></linearGradient></defs></g>`,
		"fallback": "skill-icons:tailwindcss-light",
	});
}

export default Component;
