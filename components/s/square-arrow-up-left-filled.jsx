import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq9-44b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xq9-44b7o"/>`,
		"fallback": "lucide-extended:square-arrow-up-left-filled",
	});
}

export default Component;
