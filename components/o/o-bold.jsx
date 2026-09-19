import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4qtafbhn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4qtafbhn"/>`,
		"fallback": "glyphs:o-bold",
	});
}

export default Component;
