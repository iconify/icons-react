import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5a9aobrr.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5a9aobrr"/>`,
		"fallback": "si-glyph:repeat",
	});
}

export default Component;
