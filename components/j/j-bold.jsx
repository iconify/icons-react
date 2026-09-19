import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggc7n1z-c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggc7n1z-c"/>`,
		"fallback": "glyphs:j-bold",
	});
}

export default Component;
