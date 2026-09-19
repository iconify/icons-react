import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxh4johuk.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxh4johuk"/>`,
		"fallback": "si-glyph:poker-3",
	});
}

export default Component;
