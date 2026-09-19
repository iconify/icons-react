import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyvjlmb1e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fyvjlmb1e"/>`,
		"fallback": "glyphs:kick-scooter-outline",
	});
}

export default Component;
