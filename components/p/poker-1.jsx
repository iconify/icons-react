import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujm4itb3b.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujm4itb3b"/>`,
		"fallback": "si-glyph:poker-1",
	});
}

export default Component;
