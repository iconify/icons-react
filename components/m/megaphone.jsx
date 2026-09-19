import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bps3qta_t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bps3qta_t"/>`,
		"fallback": "bi:megaphone",
	});
}

export default Component;
