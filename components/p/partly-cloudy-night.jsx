import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs9xiaclo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs9xiaclo"/>`,
		"fallback": "carbon:partly-cloudy-night",
	});
}

export default Component;
