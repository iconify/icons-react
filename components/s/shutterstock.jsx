import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbqqnvm1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbqqnvm1w"/>`,
		"fallback": "simple-icons:shutterstock",
	});
}

export default Component;
