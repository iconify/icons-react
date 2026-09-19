import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp3lfk64n.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp3lfk64n"/>`,
		"fallback": "si-glyph:road",
	});
}

export default Component;
