import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vczdc5b7e.css';
import '../../css/c/ch96cfb3l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vczdc5b7e"/><path class="ch96cfb3l"/></g>`,
		"fallback": "fluent-emoji-flat:nose-light",
	});
}

export default Component;
