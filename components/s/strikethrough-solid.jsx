import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtjx3yi_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vtjx3yi_q"/>`,
		"fallback": "heroicons:strikethrough-solid",
	});
}

export default Component;
