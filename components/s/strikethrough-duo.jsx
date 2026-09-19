import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5_-s9p0i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5_-s9p0i"/>`,
		"fallback": "glyphs:strikethrough-duo",
	});
}

export default Component;
