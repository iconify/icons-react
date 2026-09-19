import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kldiywb8y.css';

const viewBox = {"width":460,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kldiywb8y"/>`,
		"fallback": "file-icons:leaflet",
	});
}

export default Component;
