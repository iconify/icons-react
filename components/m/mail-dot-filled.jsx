import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6rbxzurq.css';
import '../../css/v/vvznrfbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6rbxzurq"/><path class="vvznrfbcw"/>`,
		"fallback": "lucide-extended:mail-dot-filled",
	});
}

export default Component;
