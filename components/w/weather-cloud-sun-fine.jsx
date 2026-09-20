import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upm3vqb1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upm3vqb1d"/>`,
		"fallback": "streamline-pixel:weather-cloud-sun-fine",
	});
}

export default Component;
