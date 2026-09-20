import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy_hb70yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy_hb70yo"/>`,
		"fallback": "mdi:number-zero-circle-outline",
	});
}

export default Component;
