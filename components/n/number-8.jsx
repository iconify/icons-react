import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byrp3ybsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byrp3ybsf"/>`,
		"fallback": "mdi:number-8",
	});
}

export default Component;
