import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eldv-d4uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eldv-d4uo"/>`,
		"fallback": "humbleicons:spinner-earring",
	});
}

export default Component;
