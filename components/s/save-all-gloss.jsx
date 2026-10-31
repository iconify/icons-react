import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g3fwvokwp.css';
import '../../css/x/xw63psb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g3fwvokwp wm-k"/><path class="wm-a xw63psb-u"/></g>`,
		"fallback": "withicons:save-all-gloss",
	});
}

export default Component;
