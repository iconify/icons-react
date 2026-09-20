import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbw-5nbbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbw-5nbbu"/>`,
		"fallback": "selfhst:strava-statistics-light",
	});
}

export default Component;
