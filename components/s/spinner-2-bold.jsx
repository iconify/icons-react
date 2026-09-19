import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgbds-orp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qgbds-orp"/>`,
		"fallback": "glyphs:spinner-2-bold",
	});
}

export default Component;
