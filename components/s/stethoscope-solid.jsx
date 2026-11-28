import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc773cb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc773cb-n"/>`,
		"fallback": "iconaut:stethoscope-solid",
	});
}

export default Component;
