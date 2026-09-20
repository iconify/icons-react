import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfd20o4wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfd20o4wp"/>`,
		"fallback": "lucide-lab:star-north",
	});
}

export default Component;
