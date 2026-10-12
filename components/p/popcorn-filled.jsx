import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e08h97bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e08h97bpw"/>`,
		"fallback": "lucide-extended:popcorn-filled",
	});
}

export default Component;
