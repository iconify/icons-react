import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amosus9kb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amosus9kb"/>`,
		"fallback": "streamline-pixel:weather-meteor",
	});
}

export default Component;
