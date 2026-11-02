import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chgko6bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chgko6bau"/>`,
		"fallback": "mingcute:maya-pyramids-fill",
	});
}

export default Component;
