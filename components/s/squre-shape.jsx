import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mll5hmbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="mll5hmbsk"/>`,
		"fallback": "uim:squre-shape",
	});
}

export default Component;
