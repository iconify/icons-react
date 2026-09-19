import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj5fy7p2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj5fy7p2u"/>`,
		"fallback": "boxicons:sapling",
	});
}

export default Component;
