import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgm1yzbwo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgm1yzbwo"/>`,
		"fallback": "glyphs:layer-front-outline",
	});
}

export default Component;
