import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd6bibcxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd6bibcxn"/>`,
		"fallback": "withicons:shield-x-gloss",
	});
}

export default Component;
