import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikfqmnb8s.css';
import '../../css/j/jo6q_wbuz.css';
import '../../css/j/j7547va7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikfqmnb8s"/><path class="jo6q_wbuz"/><path class="j7547va7f"/>`,
		"fallback": "solar:rewind-15-seconds-back-bold",
	});
}

export default Component;
