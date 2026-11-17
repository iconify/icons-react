import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6pd55bue.css';
import '../../css/j/j7n6h9bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6pd55bue"/><path class="j7n6h9bec"/>`,
		"fallback": "lucide-extended:square-arrow-down-enter-filled",
	});
}

export default Component;
