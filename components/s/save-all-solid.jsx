import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fkxxlvd0u.css';
import '../../css/x/xulm56bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fkxxlvd0u"/><path class="wm-a xulm56bnc"/></g>`,
		"fallback": "withicons:save-all-solid",
	});
}

export default Component;
