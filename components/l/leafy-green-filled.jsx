import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsnt9mslf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsnt9mslf"/>`,
		"fallback": "lucide-extended:leafy-green-filled",
	});
}

export default Component;
