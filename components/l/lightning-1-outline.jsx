import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e58o2jowk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e58o2jowk"/>`,
		"fallback": "glyphs:lightning-1-outline",
	});
}

export default Component;
