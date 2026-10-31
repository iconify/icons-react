import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypvqe6-il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k ypvqe6-il"/>`,
		"fallback": "withicons:pipette-gloss",
	});
}

export default Component;
