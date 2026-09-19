import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8vsdy3la.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8vsdy3la"/>`,
		"fallback": "glyphs:sort-numeric-up",
	});
}

export default Component;
