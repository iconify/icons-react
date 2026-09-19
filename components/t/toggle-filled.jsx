import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6-x6hoxf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6-x6hoxf"/>`,
		"fallback": "fluent-mdl2:toggle-filled",
	});
}

export default Component;
