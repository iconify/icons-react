import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpm78qb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpm78qb5t"/>`,
		"fallback": "hugeicons:moon-star",
	});
}

export default Component;
