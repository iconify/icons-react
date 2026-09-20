import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fly8dtu7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fly8dtu7d"/>`,
		"fallback": "lucide:messages-square",
	});
}

export default Component;
