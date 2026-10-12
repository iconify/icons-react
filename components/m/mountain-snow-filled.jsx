import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp5fi2byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qp5fi2byd"/>`,
		"fallback": "lucide-extended:mountain-snow-filled",
	});
}

export default Component;
