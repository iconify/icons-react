import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smnhq1bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="smnhq1bea"/>`,
		"fallback": "lucide-extended:message-square-check-filled",
	});
}

export default Component;
