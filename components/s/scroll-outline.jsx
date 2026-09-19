import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iooj79bob.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iooj79bob"/>`,
		"fallback": "glyphs:scroll-outline",
	});
}

export default Component;
