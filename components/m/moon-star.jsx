import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-4g-9byg.css';
import '../../css/a/a2og3c3yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-4g-9byg"/><path class="a2og3c3yl"/>`,
		"fallback": "boxicons:moon-star",
	});
}

export default Component;
