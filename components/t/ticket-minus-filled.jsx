import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzi2ayb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xzi2ayb8d"/>`,
		"fallback": "lucide-extended:ticket-minus-filled",
	});
}

export default Component;
