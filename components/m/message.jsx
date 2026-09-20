import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_2v_9b6q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_2v_9b6q"/>`,
		"fallback": "ooui:message",
	});
}

export default Component;
