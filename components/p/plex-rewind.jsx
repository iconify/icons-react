import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gltzpcbli.css';
import '../../css/y/y465w_bjd.css';
import '../../css/r/rjpdif3ye.css';
import '../../css/c/cziss-0lo.css';
import '../../css/a/atae_0b0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG5FSMjeWZ" x1="-448.996" x2="-437.669" y1="-205.997" y2="-194.67" gradientTransform="matrix(11.25 0 0 22.5 5192.5 4678.5)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gltzpcbli"/><stop offset="1" class="y465w_bjd"/></linearGradient><path fill="url(#SVG5FSMjeWZ)" class="rjpdif3ye"/><linearGradient id="SVG0vPUweQU" x1="-444.508" x2="-433.181" y1="-202.219" y2="-190.892" gradientTransform="matrix(11.25 0 0 22.5 5201.5 4678.5)" gradientUnits="userSpaceOnUse"><stop offset="0" class="y465w_bjd"/><stop offset="1" class="gltzpcbli"/></linearGradient><path fill="url(#SVG0vPUweQU)" class="cziss-0lo"/><linearGradient id="SVGCCbCje6U" x1="-482.713" x2="-479.578" y1="-205.906" y2="-202.77" gradientTransform="translate(16477 7134.751)scale(33.75)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gltzpcbli"/><stop offset="1" class="y465w_bjd"/></linearGradient><path fill="url(#SVGCCbCje6U)" class="atae_0b0o"/>`,
		"fallback": "selfhst:plex-rewind",
	});
}

export default Component;
