import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydug6fb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydug6fb3m"/>`,
		"fallback": "lucide-lab:utensils",
	});
}

export default Component;
