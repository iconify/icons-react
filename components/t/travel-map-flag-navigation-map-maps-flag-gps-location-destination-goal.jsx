import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqgpm_b_z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqgpm_b_z"/>`,
		"fallback": "streamline:travel-map-flag-navigation-map-maps-flag-gps-location-destination-goal",
	});
}

export default Component;
