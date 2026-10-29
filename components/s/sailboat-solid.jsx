import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/opzuohbiv.css';
import '../../css/n/nmi_1_css.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="opzuohbiv"/><path class="nmi_1_css wm-a"/></g>`,
		"fallback": "withicons:sailboat-solid",
	});
}

export default Component;
