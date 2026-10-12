import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bga350_7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bga350_7e"/>`,
		"fallback": "lucide-extended:map-pin-check-inside-filled",
	});
}

export default Component;
