import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obm3mkxem.css';
import '../../css/v/vw1b76hol.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obm3mkxem"/><path class="vw1b76hol"/>`,
		"fallback": "streamline-pixel:map-navigation-pin-location-2",
	});
}

export default Component;
