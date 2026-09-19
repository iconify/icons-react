import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je4k0vbju.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je4k0vbju"/>`,
		"fallback": "carbon:traffic-weather-incident",
	});
}

export default Component;
