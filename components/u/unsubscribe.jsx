import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njv6wibcu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njv6wibcu"/>`,
		"fallback": "fluent-mdl2:unsubscribe",
	});
}

export default Component;
