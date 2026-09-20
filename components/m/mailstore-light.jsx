import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/fzo_evvda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG47nHkwpy" x1="102.123" x2="456.589" y1="102.123" y2="456.589" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVG47nHkwpy)" class="fzo_evvda"/>`,
		"fallback": "selfhst:mailstore-light",
	});
}

export default Component;
