import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z10gtnb7x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z10gtnb7x"/>`,
		"fallback": "glyphs:watch-1-outline",
	});
}

export default Component;
