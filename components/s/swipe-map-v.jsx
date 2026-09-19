import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp0nxibaz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp0nxibaz"/>`,
		"fallback": "gis:swipe-map-v",
	});
}

export default Component;
