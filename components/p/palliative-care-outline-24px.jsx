import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4rp2xb7k.css';
import '../../css/g/gcypf8b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u4rp2xb7k"/><path class="gcypf8b_q"/></g>`,
		"fallback": "healthicons:palliative-care-outline-24px",
	});
}

export default Component;
