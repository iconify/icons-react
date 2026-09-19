import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhbi0hb7j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhbi0hb7j"/>`,
		"fallback": "fluent-emoji-high-contrast:pencil",
	});
}

export default Component;
