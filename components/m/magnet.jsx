import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgycscqxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgycscqxp"/>`,
		"fallback": "fluent-emoji-high-contrast:magnet",
	});
}

export default Component;
