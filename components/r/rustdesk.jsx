import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpko7pgei.css';
import '../../css/a/ahn033box.css';
import '../../css/f/fkyoc5bqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGsLN7Kebi" x1="-46.766" x2="-33.04" y1="665.403" y2="679.128" gradientTransform="matrix(26.0005 0 0 -25.9993 1292.017 17736.06)" gradientUnits="userSpaceOnUse"><stop offset="0" class="rpko7pgei"/><stop offset="1" class="ahn033box"/></linearGradient><path fill="url(#SVGsLN7Kebi)" class="fkyoc5bqc"/>`,
		"fallback": "selfhst:rustdesk",
	});
}

export default Component;
