import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx450s6ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx450s6ch"/>`,
		"fallback": "mage:message-question-mark-round-fill",
	});
}

export default Component;
