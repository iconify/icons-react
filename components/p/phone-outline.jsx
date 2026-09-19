import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5z1rjb4n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i5z1rjb4n"/>`,
		"fallback": "glyphs:phone-outline",
	});
}

export default Component;
