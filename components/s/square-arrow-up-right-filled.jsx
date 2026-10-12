import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibru-pbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ibru-pbjl"/>`,
		"fallback": "lucide-extended:square-arrow-up-right-filled",
	});
}

export default Component;
