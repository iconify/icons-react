import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxz4xdoel.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxz4xdoel"/>`,
		"fallback": "streamline:interface-weather-moon-astronomy-moon-science-space-crescent",
	});
}

export default Component;
