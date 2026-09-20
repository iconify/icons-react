import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewa58_ceg.css';
import '../../css/c/c48dyx_ko.css';
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
		"content": `<g class="ft5dv1b6b"><path class="ewa58_ceg"/><path fill="url(#SVGxuhkcdIk)" clip-rule="evenodd" class="c48dyx_ko"/><defs><linearGradient id="SVGxuhkcdIk" x1="54.186" x2="5.418" y1="6.967" y2="55.735" gradientUnits="userSpaceOnUse"><stop class="y5fb0lpcu"/><stop offset="1" class="ojj18acah"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:turborepo-dark",
	});
}

export default Component;
