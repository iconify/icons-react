import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxpg48nlf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxpg48nlf"/>`,
		"fallback": "glyphs-poly:three",
	});
}

export default Component;
