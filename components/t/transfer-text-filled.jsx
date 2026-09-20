import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq_-9tbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq_-9tbrt"/>`,
		"fallback": "weui:transfer-text-filled",
	});
}

export default Component;
