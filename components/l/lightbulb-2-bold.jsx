import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebp_wrb2k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebp_wrb2k"/>`,
		"fallback": "glyphs:lightbulb-2-bold",
	});
}

export default Component;
