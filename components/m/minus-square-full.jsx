import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq_15b37m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq_15b37m"/>`,
		"fallback": "uis:minus-square-full",
	});
}

export default Component;
