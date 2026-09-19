import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcfw6kb_u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcfw6kb_u"/>`,
		"fallback": "glyphs:sd-card",
	});
}

export default Component;
