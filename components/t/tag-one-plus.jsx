import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0lb46ylk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0lb46ylk"/>`,
		"fallback": "si-glyph:tag-one-plus",
	});
}

export default Component;
