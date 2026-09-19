import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/covvo99ya.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="covvo99ya"/>`,
		"fallback": "si-glyph:pen",
	});
}

export default Component;
