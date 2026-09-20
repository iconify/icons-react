import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq18cp_ys.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq18cp_ys"/>`,
		"fallback": "streamline:travel-map-location-target-off-target-location-map-off-services-navigation-maps-gps",
	});
}

export default Component;
