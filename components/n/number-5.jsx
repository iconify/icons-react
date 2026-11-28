import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k124hfb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k124hfb0t"/>`,
		"fallback": "iconaut:number-5",
	});
}

export default Component;
