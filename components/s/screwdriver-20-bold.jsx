import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag31uv8-s.css';
import '../../css/n/nlpbp5but.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag31uv8-s"/><path class="nlpbp5but"/>`,
		"fallback": "energy-icons:screwdriver-20-bold",
	});
}

export default Component;
