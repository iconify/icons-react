import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0_u48bns.css';

const viewBox = {"width":1024,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0_u48bns"/>`,
		"fallback": "fa:step-backward",
	});
}

export default Component;
