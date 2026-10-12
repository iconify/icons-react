import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn5j5rbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn5j5rbji"/>`,
		"fallback": "lucide-extended:square-arrow-right-enter-filled",
	});
}

export default Component;
