import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu-ylk7ly.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu-ylk7ly"/>`,
		"fallback": "streamline:nature-ecology-green-house-glass-building-plants-crops-produce-farm",
	});
}

export default Component;
