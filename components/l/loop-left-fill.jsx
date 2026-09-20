import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogyba2b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogyba2b7b"/>`,
		"fallback": "ri:loop-left-fill",
	});
}

export default Component;
