import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhh2ycz5m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhh2ycz5m"/>`,
		"fallback": "glyphs:paperclip-bold",
	});
}

export default Component;
