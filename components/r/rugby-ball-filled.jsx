import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4yu8j-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yt4yu8j-n"/>`,
		"fallback": "lucide-extended:rugby-ball-filled",
	});
}

export default Component;
