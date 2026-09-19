import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu69tb9sx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu69tb9sx"/>`,
		"fallback": "glyphs:unlink-bold",
	});
}

export default Component;
