import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp5lgw7sw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sp5lgw7sw"/>`,
		"fallback": "glyphs:meh-bold",
	});
}

export default Component;
