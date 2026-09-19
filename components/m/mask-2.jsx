import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9zbbnmpo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9zbbnmpo"/>`,
		"fallback": "si-glyph:mask-2",
	});
}

export default Component;
