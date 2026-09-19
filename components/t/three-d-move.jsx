import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwbksdo8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwbksdo8j"/>`,
		"fallback": "hugeicons:three-d-move",
	});
}

export default Component;
