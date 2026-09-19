import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6__l5bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6__l5bzk"/>`,
		"fallback": "boxicons:train-filled",
	});
}

export default Component;
