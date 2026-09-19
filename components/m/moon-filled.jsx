import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwbewhi_u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwbewhi_u"/>`,
		"fallback": "pepicons:moon-filled",
	});
}

export default Component;
