import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ik4nffbis.css';
import '../../css/n/nkmpjmuhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ik4nffbis"/><path class="nkmpjmuhj wm-a"/></g>`,
		"fallback": "withicons:panel-right-close-solid",
	});
}

export default Component;
