import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq88fx61h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sq88fx61h"/>`,
		"fallback": "glyphs-poly:spinner",
	});
}

export default Component;
