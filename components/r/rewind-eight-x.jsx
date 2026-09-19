import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypbhey92c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypbhey92c"/>`,
		"fallback": "fluent-mdl2:rewind-eight-x",
	});
}

export default Component;
