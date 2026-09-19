import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twyu62blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twyu62blm"/>`,
		"fallback": "boxicons:undo-stroke-alt-filled",
	});
}

export default Component;
