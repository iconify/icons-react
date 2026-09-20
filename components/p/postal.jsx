import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdfd9tp6n.css';
import '../../css/s/sl1qm9b9s.css';
import '../../css/u/uq4w8hbjz.css';
import '../../css/b/bm085fmen.css';
import '../../css/z/z7xz66b3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGJjKUWdMZ" x1="-464.068" x2="-460.831" y1="-6.868" y2="-6.868" gradientTransform="matrix(46.2845 0 0 137.276 21510.137 1232.757)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cdfd9tp6n"/><stop offset="1" class="sl1qm9b9s"/></linearGradient><path fill="url(#SVGJjKUWdMZ)" class="uq4w8hbjz"/><linearGradient id="SVGyMxKBdPZ" x1="-469.986" x2="-467.359" y1="-6.487" y2="-9.015" gradientTransform="matrix(112.0954 0 0 137.276 52797.293 1211.773)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cdfd9tp6n"/><stop offset="1" class="sl1qm9b9s"/></linearGradient><path fill="url(#SVGyMxKBdPZ)" class="bm085fmen"/><path class="z7xz66b3l"/>`,
		"fallback": "selfhst:postal",
	});
}

export default Component;
