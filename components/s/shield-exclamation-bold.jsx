import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkkna6b0z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkkna6b0z"/>`,
		"fallback": "glyphs:shield-exclamation-bold",
	});
}

export default Component;
