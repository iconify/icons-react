import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn8z-11mg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tn8z-11mg"/>`,
		"fallback": "glyphs:mobile-1-outline",
	});
}

export default Component;
