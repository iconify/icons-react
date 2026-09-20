import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbcqh3bqb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbcqh3bqb"/>`,
		"fallback": "pinhead:map-pin-outline",
	});
}

export default Component;
