import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4v_u2b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4v_u2b7k"/>`,
		"fallback": "mdi:smell-off",
	});
}

export default Component;
