import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_wtfcbbj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_wtfcbbj"/>`,
		"fallback": "glyphs:moon-duo",
	});
}

export default Component;
