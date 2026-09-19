import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc-s60n_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fc-s60n_w"/>`,
		"fallback": "iconamoon:number-6-square-fill",
	});
}

export default Component;
