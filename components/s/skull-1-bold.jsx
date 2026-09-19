import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_2cp-b6p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_2cp-b6p"/>`,
		"fallback": "glyphs:skull-1-bold",
	});
}

export default Component;
