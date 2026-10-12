import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsfum1qaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tsfum1qaj"/>`,
		"fallback": "lucide-extended:ticket-percent-filled",
	});
}

export default Component;
