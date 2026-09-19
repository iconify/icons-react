import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-o8fpw5r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-o8fpw5r"/>`,
		"fallback": "glyphs:mouse-2-bold",
	});
}

export default Component;
