import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-306exua.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-306exua"/>`,
		"fallback": "si-glyph:tree",
	});
}

export default Component;
