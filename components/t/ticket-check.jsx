import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nl_ai7b3v.css';
import '../../css/l/l97qpbbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nl_ai7b3v"/><path class="l97qpbbsj"/></g>`,
		"fallback": "lucide:ticket-check",
	});
}

export default Component;
