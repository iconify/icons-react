import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/o/odi669bij.css';
import '../../css/n/ntrj6wbus.css';
import '../../css/l/lc00ugj9n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path fill="url(#SVGrL22Wceb)" class="odi669bij"/><defs><radialGradient id="SVGrL22Wceb" cx="0" cy="0" r="1" gradientTransform="matrix(0 199.78 -230.653 0 21.293 125.178)" gradientUnits="userSpaceOnUse"><stop class="ntrj6wbus"/><stop offset="1" class="lc00ugj9n"/></radialGradient></defs></g>`,
		"fallback": "skill-icons:netlify-dark",
	});
}

export default Component;
