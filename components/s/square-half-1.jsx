import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6qrxbmmj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6qrxbmmj"/>`,
		"fallback": "glyphs:square-half-1",
	});
}

export default Component;
