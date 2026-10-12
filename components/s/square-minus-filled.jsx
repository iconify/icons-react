import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl64q8ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yl64q8ben"/>`,
		"fallback": "lucide-extended:square-minus-filled",
	});
}

export default Component;
