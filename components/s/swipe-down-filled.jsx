import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou7pau45d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou7pau45d"/>`,
		"fallback": "tabler:swipe-down-filled",
	});
}

export default Component;
