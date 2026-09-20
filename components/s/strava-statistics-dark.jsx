import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouvl_l-rr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouvl_l-rr"/>`,
		"fallback": "selfhst:strava-statistics-dark",
	});
}

export default Component;
