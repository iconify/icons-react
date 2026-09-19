import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0mv-cb_l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0mv-cb_l"/>`,
		"fallback": "glyphs:moon",
	});
}

export default Component;
