import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p387bwbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p387bwbgd"/>`,
		"fallback": "lucide-extended:square-padding-horizontal-filled",
	});
}

export default Component;
