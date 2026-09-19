import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw2xqvbwg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vw2xqvbwg"/>`,
		"fallback": "glyphs:map-signs-outline",
	});
}

export default Component;
