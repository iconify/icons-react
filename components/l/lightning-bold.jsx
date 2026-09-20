import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fs23uacdu.css';
import '../../css/z/zyhsb2b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fs23uacdu"/><path class="zyhsb2b9w"/></g>`,
		"fallback": "solar:lightning-bold",
	});
}

export default Component;
