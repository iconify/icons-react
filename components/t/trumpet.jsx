import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqt3yscwb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqt3yscwb"/>`,
		"fallback": "si-glyph:trumpet",
	});
}

export default Component;
