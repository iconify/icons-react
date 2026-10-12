import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpptg2b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpptg2b4p"/>`,
		"fallback": "lucide-extended:square-dot-filled",
	});
}

export default Component;
