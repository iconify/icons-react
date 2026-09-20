import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i131zj91m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i131zj91m"/>`,
		"fallback": "tabler:lock-square-rounded-filled",
	});
}

export default Component;
