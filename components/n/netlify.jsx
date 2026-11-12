import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntrj6wbus.css';
import '../../css/l/lc00ugj9n.css';
import '../../css/a/an_myyb-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVG6w42yc2F" cx="-90.77" cy="-7.597" r="13.368" gradientTransform="matrix(0 38.301 -44.1228 0 -79.19 3476.3)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ntrj6wbus"/><stop offset="1" class="lc00ugj9n"/></radialGradient><path fill="url(#SVG6w42yc2F)" class="an_myyb-a"/>`,
		"fallback": "selfhst:netlify",
	});
}

export default Component;
