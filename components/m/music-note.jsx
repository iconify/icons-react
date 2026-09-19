import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt5cytbid.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt5cytbid"/>`,
		"fallback": "si-glyph:music-note",
	});
}

export default Component;
