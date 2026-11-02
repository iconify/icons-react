import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ehfkb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ehfkb4j"/>`,
		"fallback": "mingcute:message-circle-question-mark-line",
	});
}

export default Component;
