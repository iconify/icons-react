import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo-p5bc0p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo-p5bc0p"/>`,
		"fallback": "streamline-pixel:weather-moon",
	});
}

export default Component;
