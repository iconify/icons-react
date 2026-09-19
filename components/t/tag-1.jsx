import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4tehhumr.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4tehhumr"/>`,
		"fallback": "si-glyph:tag-1",
	});
}

export default Component;
