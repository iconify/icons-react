import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itl9s5g-p.css';
import '../../css/z/z6pxdsb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itl9s5g-p"/><path class="z6pxdsb4c"/>`,
		"fallback": "boxicons:spa-filled",
	});
}

export default Component;
