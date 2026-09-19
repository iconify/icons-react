import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvsudxb6g.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvsudxb6g"/>`,
		"fallback": "gis:pin-earth",
	});
}

export default Component;
