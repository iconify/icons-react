import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c73jm9scg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c73jm9scg"/>`,
		"fallback": "glyphs:tree-3-bold",
	});
}

export default Component;
