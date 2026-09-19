import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iysp26bdb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iysp26bdb"/>`,
		"fallback": "glyphs:plug-outline",
	});
}

export default Component;
