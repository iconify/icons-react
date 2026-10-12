import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr52ofb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr52ofb1z"/>`,
		"fallback": "lucide-extended:vibrate-filled",
	});
}

export default Component;
