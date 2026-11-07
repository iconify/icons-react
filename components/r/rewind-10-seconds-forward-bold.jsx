import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssc66acas.css';
import '../../css/j/jo6q_wbuz.css';
import '../../css/m/m0j83-9at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssc66acas"/><path class="jo6q_wbuz"/><path clip-rule="evenodd" class="m0j83-9at"/>`,
		"fallback": "solar:rewind-10-seconds-forward-bold",
	});
}

export default Component;
