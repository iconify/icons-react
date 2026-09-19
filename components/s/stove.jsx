import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8z_ehb6c.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8z_ehb6c"/>`,
		"fallback": "si-glyph:stove",
	});
}

export default Component;
