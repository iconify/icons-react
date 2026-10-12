import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-hn-xb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-hn-xb0y"/>`,
		"fallback": "lucide-extended:video-filled",
	});
}

export default Component;
