import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2--zlbhj.css';
import '../../css/j/jqzwqyd4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2--zlbhj"/><path class="jqzwqyd4q"/>`,
		"fallback": "solar:upload-bold",
	});
}

export default Component;
