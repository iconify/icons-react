import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgshv822m.css';
import '../../css/q/qj7v7ob0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tgshv822m wm-k"/><path class="qj7v7ob0m wm-a"/></g>`,
		"fallback": "withicons:mails-gloss",
	});
}

export default Component;
