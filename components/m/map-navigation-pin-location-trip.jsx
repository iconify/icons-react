import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds_tcibbp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds_tcibbp"/>`,
		"fallback": "streamline-pixel:map-navigation-pin-location-trip",
	});
}

export default Component;
