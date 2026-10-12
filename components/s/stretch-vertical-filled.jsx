import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmto18o1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmto18o1x"/>`,
		"fallback": "lucide-extended:stretch-vertical-filled",
	});
}

export default Component;
