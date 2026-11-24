import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im7p7qbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im7p7qbze"/>`,
		"fallback": "lucide-extended:mouse-pointer-2-off-filled",
	});
}

export default Component;
