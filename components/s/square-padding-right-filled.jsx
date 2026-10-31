import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izzk8ehcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="izzk8ehcc"/>`,
		"fallback": "lucide-extended:square-padding-right-filled",
	});
}

export default Component;
