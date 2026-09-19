import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnue5lbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnue5lbcc"/>`,
		"fallback": "bxs:skull",
	});
}

export default Component;
