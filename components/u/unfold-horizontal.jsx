import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr94l6b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr94l6b4k"/>`,
		"fallback": "lucide:unfold-horizontal",
	});
}

export default Component;
