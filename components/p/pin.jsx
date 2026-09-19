import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou2f5gbxh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou2f5gbxh"/>`,
		"fallback": "gis:pin",
	});
}

export default Component;
