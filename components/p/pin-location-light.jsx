import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqlbbubhn.css';
import '../../css/n/ngbp4qb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqlbbubhn"/><path class="ngbp4qb1t"/>`,
		"fallback": "stash:pin-location-light",
	});
}

export default Component;
