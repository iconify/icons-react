import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbs6l8byp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbs6l8byp"/>`,
		"fallback": "fluent-mdl2:touch-pointer",
	});
}

export default Component;
