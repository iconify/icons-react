import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9lp3i2ol.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9lp3i2ol"/>`,
		"fallback": "maki:theatre-15",
	});
}

export default Component;
