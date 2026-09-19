import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nax1ayx-j.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nax1ayx-j"/>`,
		"fallback": "si-glyph:tag",
	});
}

export default Component;
