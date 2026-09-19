import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n12drmbvu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n12drmbvu"/>`,
		"fallback": "glyphs:times",
	});
}

export default Component;
