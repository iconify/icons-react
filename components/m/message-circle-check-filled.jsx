import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdrs85b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tdrs85b3o"/>`,
		"fallback": "lucide-extended:message-circle-check-filled",
	});
}

export default Component;
