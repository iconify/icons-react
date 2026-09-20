import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f54y_bs5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f54y_bs5m"/>`,
		"fallback": "token:rsc",
	});
}

export default Component;
