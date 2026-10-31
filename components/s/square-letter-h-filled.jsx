import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b00-xbc-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b00-xbc-v"/>`,
		"fallback": "lucide-extended:square-letter-h-filled",
	});
}

export default Component;
