import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd-tiu1yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd-tiu1yx"/>`,
		"fallback": "ri:number-5",
	});
}

export default Component;
