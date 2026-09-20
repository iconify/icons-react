import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwqb0kyud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwqb0kyud"/>`,
		"fallback": "token:rxd",
	});
}

export default Component;
