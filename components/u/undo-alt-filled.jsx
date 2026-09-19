import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shy0p6bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shy0p6bra"/>`,
		"fallback": "boxicons:undo-alt-filled",
	});
}

export default Component;
