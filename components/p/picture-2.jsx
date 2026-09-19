import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njmj_ab4y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njmj_ab4y"/>`,
		"fallback": "si-glyph:picture-2",
	});
}

export default Component;
