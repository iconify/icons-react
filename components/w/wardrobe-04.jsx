import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5np71b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5np71b-p"/>`,
		"fallback": "hugeicons:wardrobe-04",
	});
}

export default Component;
