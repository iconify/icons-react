import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp6kl1uty.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp6kl1uty"/>`,
		"fallback": "glyphs:plus-outline",
	});
}

export default Component;
