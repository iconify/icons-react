import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f22o04bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f22o04bop"/>`,
		"fallback": "mingcute:panoramas-line",
	});
}

export default Component;
