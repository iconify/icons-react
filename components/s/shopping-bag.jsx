import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oay60c9mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oay60c9mk"/>`,
		"fallback": "uil:shopping-bag",
	});
}

export default Component;
