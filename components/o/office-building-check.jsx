import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq0smd1rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq0smd1rr"/>`,
		"fallback": "noviair:office-building-check",
	});
}

export default Component;
