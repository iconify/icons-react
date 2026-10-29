import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r9cxctbkh.css';
import '../../css/q/qcozz-90c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r9cxctbkh"/><path class="qcozz-90c wm-a"/></g>`,
		"fallback": "withicons:spy-solid",
	});
}

export default Component;
