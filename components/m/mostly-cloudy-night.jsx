import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9pw3vknn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9pw3vknn"/>`,
		"fallback": "carbon:mostly-cloudy-night",
	});
}

export default Component;
