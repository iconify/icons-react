import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry2_e2bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ry2_e2bzd"/>`,
		"fallback": "lucide-extended:message-circle-code-filled",
	});
}

export default Component;
