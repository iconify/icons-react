import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmku7mbrg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmku7mbrg"/>`,
		"fallback": "glyphs:squircle-duo",
	});
}

export default Component;
