import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4cdrybmo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4cdrybmo"/>`,
		"fallback": "glyphs:pin-1-outline",
	});
}

export default Component;
