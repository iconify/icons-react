import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5209lwqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e5209lwqd"/>`,
		"fallback": "lucide-extended:square-letter-k-filled",
	});
}

export default Component;
