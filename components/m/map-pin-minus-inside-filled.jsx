import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzgrr6crx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vzgrr6crx"/>`,
		"fallback": "lucide-extended:map-pin-minus-inside-filled",
	});
}

export default Component;
