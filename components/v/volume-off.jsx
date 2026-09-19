import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfz-e7d_t.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfz-e7d_t"/>`,
		"fallback": "fontisto:volume-off",
	});
}

export default Component;
