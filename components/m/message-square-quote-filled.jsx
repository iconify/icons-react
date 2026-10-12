import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs4529ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qs4529ban"/>`,
		"fallback": "lucide-extended:message-square-quote-filled",
	});
}

export default Component;
