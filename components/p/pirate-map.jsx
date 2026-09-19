import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvyy43brv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvyy43brv"/>`,
		"fallback": "gis:pirate-map",
	});
}

export default Component;
