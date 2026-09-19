import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9m3lvswz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9m3lvswz"/>`,
		"fallback": "carbon:soil-temperature-field",
	});
}

export default Component;
