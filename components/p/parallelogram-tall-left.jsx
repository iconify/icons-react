import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbps0obhz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbps0obhz"/>`,
		"fallback": "pinhead:parallelogram-tall-left",
	});
}

export default Component;
