import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgi2qnb5y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgi2qnb5y"/>`,
		"fallback": "si-glyph:link-3",
	});
}

export default Component;
