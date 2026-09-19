import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy7mr6luy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy7mr6luy"/>`,
		"fallback": "glyphs:k-outline",
	});
}

export default Component;
