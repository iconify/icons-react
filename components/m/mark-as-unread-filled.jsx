import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emh9t9b8k.css';
import '../../css/t/tvods8eyi.css';
import '../../css/h/hidh8db6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emh9t9b8k"/><path class="tvods8eyi"/><path class="hidh8db6n"/>`,
		"fallback": "tdesign:mark-as-unread-filled",
	});
}

export default Component;
