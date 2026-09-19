import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7eoc6b7r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7eoc6b7r"/>`,
		"fallback": "fluent-emoji-high-contrast:microscope",
	});
}

export default Component;
