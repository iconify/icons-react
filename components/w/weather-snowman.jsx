import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev43y730d.css';
import '../../css/y/y-tut6bjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev43y730d"/><path class="y-tut6bjn"/>`,
		"fallback": "streamline-pixel:weather-snowman",
	});
}

export default Component;
