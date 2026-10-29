import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iw8ikrboq.css';
import '../../css/f/fhbv_7bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="iw8ikrboq"/><path class="fhbv_7bfd wm-a"/></g>`,
		"fallback": "withicons:school-solid",
	});
}

export default Component;
