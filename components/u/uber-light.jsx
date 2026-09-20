import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndtvn8s4t.css';

const viewBox = {"width":926.905,"height":321.777};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndtvn8s4t"/>`,
		"fallback": "thesvg-color:uber-light",
	});
}

export default Component;
