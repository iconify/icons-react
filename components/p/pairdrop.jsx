import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzdtuh_ya.css';
import '../../css/d/djsc_abcb.css';
import '../../css/g/gkcfldb9j.css';
import '../../css/g/gevok0bdf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG1ULwzb7T" x1="1.309" x2="510.691" y1="403.046" y2="108.954" gradientUnits="userSpaceOnUse"><stop offset="0" class="mzdtuh_ya"/><stop offset="1" class="djsc_abcb"/></linearGradient><path fill="url(#SVG1ULwzb7T)" class="gkcfldb9j"/><path class="gevok0bdf"/>`,
		"fallback": "selfhst:pairdrop",
	});
}

export default Component;
