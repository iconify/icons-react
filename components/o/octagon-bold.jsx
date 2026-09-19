import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9j1fm6fb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b9j1fm6fb"/>`,
		"fallback": "glyphs:octagon-bold",
	});
}

export default Component;
