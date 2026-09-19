import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxi3vfcsu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxi3vfcsu"/>`,
		"fallback": "si-glyph:jump-backward",
	});
}

export default Component;
