import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8fjh2-1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8fjh2-1x"/>`,
		"fallback": "lucide-extended:library-big-filled",
	});
}

export default Component;
