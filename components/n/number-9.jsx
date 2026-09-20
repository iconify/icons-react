import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfvy4itsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfvy4itsu"/>`,
		"fallback": "ri:number-9",
	});
}

export default Component;
