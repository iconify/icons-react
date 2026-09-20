import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ozwvvph5v.css';
import '../../css/m/mq-3k5neh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ozwvvph5v"/><path class="mq-3k5neh"/></g>`,
		"fallback": "lucide:receipt",
	});
}

export default Component;
