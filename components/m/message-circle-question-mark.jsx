import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1cieen_e.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1cieen_e"/><path class="fu72iwgtz"/>`,
		"fallback": "boxicons:message-circle-question-mark",
	});
}

export default Component;
