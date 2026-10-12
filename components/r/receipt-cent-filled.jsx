import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqj1_qbxe.css';
import '../../css/q/qcjhzlq8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqj1_qbxe"/><path clip-rule="evenodd" class="qcjhzlq8e"/>`,
		"fallback": "lucide-extended:receipt-cent-filled",
	});
}

export default Component;
