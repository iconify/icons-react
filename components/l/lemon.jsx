import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3tabnbys.css';
import '../../css/k/kprwj5bze.css';
import '../../css/g/gshg_ab4z.css';
import '../../css/w/wb-g0szet.css';
import '../../css/a/adi1_nbrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGYHjH4d5n" cx="74.4" cy="74.4" r="152" gradientUnits="userSpaceOnUse"><stop offset="0" class="x3tabnbys"/><stop offset=".85" class="kprwj5bze"/><stop offset="1" class="kprwj5bze"/></radialGradient></defs><path class="gshg_ab4z"/><path fill="url(#SVGYHjH4d5n)" transform="matrix(2.3 0 0 2.3 22.067 8.537)" class="wb-g0szet"/><path class="adi1_nbrc"/>`,
		"fallback": "xero-emoji:lemon",
	});
}

export default Component;
