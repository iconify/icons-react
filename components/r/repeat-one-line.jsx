import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa1_z_ayb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa1_z_ayb"/>`,
		"fallback": "ri:repeat-one-line",
	});
}

export default Component;
