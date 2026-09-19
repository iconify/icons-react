import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj59ymb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj59ymb4i"/>`,
		"fallback": "boxicons:pin-slash-alt-filled",
	});
}

export default Component;
