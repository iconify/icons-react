import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbx04m8qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbx04m8qh"/>`,
		"fallback": "lucide-extended:lock-keyhole-open-filled",
	});
}

export default Component;
