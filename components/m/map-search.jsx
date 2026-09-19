import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k85w4fbqt.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k85w4fbqt"/>`,
		"fallback": "gis:map-search",
	});
}

export default Component;
