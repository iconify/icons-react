import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fipf0oqlo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fipf0oqlo"/>`,
		"fallback": "glyphs:map-marker-2-bold",
	});
}

export default Component;
