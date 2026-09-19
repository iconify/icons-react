import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of_2nclse.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of_2nclse"/>`,
		"fallback": "fluent-emoji-high-contrast:man-zombie",
	});
}

export default Component;
