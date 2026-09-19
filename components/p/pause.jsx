import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm_beh2el.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm_beh2el"/>`,
		"fallback": "si-glyph:pause",
	});
}

export default Component;
