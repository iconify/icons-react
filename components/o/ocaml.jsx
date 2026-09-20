import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/b/bfivz_bzt.css';
import '../../css/k/kjxmrfbbw.css';
import '../../css/f/fu1q8w8_h.css';
import '../../css/p/pvl2anbys.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGJLYRnb5B)"><rect fill="url(#SVGQVVRCc9e)" class="ex-9i5bwz"/><path class="bfivz_bzt"/></g><defs><linearGradient id="SVGQVVRCc9e" x1="127.705" x2="127.705" y1=".12" y2="257.041" gradientUnits="userSpaceOnUse"><stop class="kjxmrfbbw"/><stop offset="1" class="fu1q8w8_h"/></linearGradient><clipPath id="SVGJLYRnb5B"><rect class="pvl2anbys"/></clipPath></defs></g>`,
		"fallback": "skill-icons:ocaml",
	});
}

export default Component;
