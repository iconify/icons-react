import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkqkbp-3k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkqkbp-3k"/>`,
		"fallback": "streamline:travel-map-navigation-arrow-off-compass-arrow-map-bearing-navigation-maps-heading-gps-off-disable",
	});
}

export default Component;
