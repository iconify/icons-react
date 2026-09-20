import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgm8h5y-t.css';
import '../../css/c/c5xz3nb4n.css';
import '../../css/y/y5fb0lpcu.css';
import '../../css/o/ojj18acah.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tgm8h5y-t"/><path fill="url(#SVGuCSTJr9j)" clip-rule="evenodd" class="c5xz3nb4n"/><defs><linearGradient id="SVGuCSTJr9j" x1="54.644" x2="5.425" y1="7.031" y2="56.211" gradientUnits="userSpaceOnUse"><stop class="y5fb0lpcu"/><stop offset="1" class="ojj18acah"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:turborepo-light",
	});
}

export default Component;
