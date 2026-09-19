import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9107n9gb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9107n9gb"/>`,
		"fallback": "si-glyph:umbrella-close",
	});
}

export default Component;
