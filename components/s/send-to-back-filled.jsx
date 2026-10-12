import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmebglb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmebglb7p"/>`,
		"fallback": "lucide-extended:send-to-back-filled",
	});
}

export default Component;
