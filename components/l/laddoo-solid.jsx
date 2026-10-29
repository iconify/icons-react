import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zrgwmybdb.css';
import '../../css/q/qyqfcyb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zrgwmybdb"/><path class="qyqfcyb_l wm-a"/></g>`,
		"fallback": "withicons:laddoo-solid",
	});
}

export default Component;
