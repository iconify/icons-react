import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsuvst8qr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsuvst8qr"/>`,
		"fallback": "glyphs:m-bold",
	});
}

export default Component;
