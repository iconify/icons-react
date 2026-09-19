import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e57oocc4w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e57oocc4w"/>`,
		"fallback": "glyphs:note-sticky-bold",
	});
}

export default Component;
