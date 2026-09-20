import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp2leebow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lp2leebow"/>`,
		"fallback": "solar:letter-unread-outline",
	});
}

export default Component;
