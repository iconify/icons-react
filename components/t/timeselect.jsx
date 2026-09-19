import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjaiwl-7y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjaiwl-7y"/>`,
		"fallback": "fad:timeselect",
	});
}

export default Component;
