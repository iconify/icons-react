import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4fde2bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4fde2bwn"/>`,
		"fallback": "lucide:timer-off",
	});
}

export default Component;
