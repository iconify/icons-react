import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivpjwx_1u.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivpjwx_1u"/>`,
		"fallback": "si-glyph:mail-empty",
	});
}

export default Component;
