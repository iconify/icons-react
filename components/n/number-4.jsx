import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-z-h3b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-z-h3b2i"/>`,
		"fallback": "ri:number-4",
	});
}

export default Component;
