import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk2cr0b6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk2cr0b6j"/>`,
		"fallback": "streamline:travel-map-rectangle-flag-navigation-map-maps-flag-gps-location-destination-goal",
	});
}

export default Component;
