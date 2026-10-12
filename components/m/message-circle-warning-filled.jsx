import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co7oz4bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="co7oz4bhv"/>`,
		"fallback": "lucide-extended:message-circle-warning-filled",
	});
}

export default Component;
