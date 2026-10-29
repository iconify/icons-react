import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h3djv1bae.css';
import '../../css/k/k54y5xmvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h3djv1bae"/><path class="k54y5xmvy wm-a"/></g>`,
		"fallback": "withicons:stocking-solid",
	});
}

export default Component;
