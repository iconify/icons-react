import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frk4m0bfw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frk4m0bfw"/>`,
		"fallback": "glyphs:phone-remove",
	});
}

export default Component;
