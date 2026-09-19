import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0ovf5b2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0ovf5b2h"/>`,
		"fallback": "glyphs:v-duo",
	});
}

export default Component;
