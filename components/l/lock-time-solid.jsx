import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eylkhvbhu.css';
import '../../css/d/dyg0v0b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eylkhvbhu"/><path class="dyg0v0b9s"/></g>`,
		"fallback": "flowbite:lock-time-solid",
	});
}

export default Component;
