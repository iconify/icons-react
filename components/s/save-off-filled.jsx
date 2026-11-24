import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbltlh2de.css';
import '../../css/f/f0xl0fb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbltlh2de"/><path class="f0xl0fb9y"/>`,
		"fallback": "lucide-extended:save-off-filled",
	});
}

export default Component;
