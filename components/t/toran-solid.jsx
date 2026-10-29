import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lo5lmt84h.css';
import '../../css/i/ij7fkxbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lo5lmt84h"/><path class="ij7fkxbrk wm-a"/></g>`,
		"fallback": "withicons:toran-solid",
	});
}

export default Component;
