import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xtlp5kbem.css';
import '../../css/t/talcz_lrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xtlp5kbem"/><path class="talcz_lrr wm-a"/></g>`,
		"fallback": "withicons:kalash-solid",
	});
}

export default Component;
