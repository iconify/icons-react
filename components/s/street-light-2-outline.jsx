import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e87y_-jlc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e87y_-jlc"/>`,
		"fallback": "glyphs:street-light-2-outline",
	});
}

export default Component;
