import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpsaa-b6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpsaa-b6u"/>`,
		"fallback": "majesticons:paper-roll-2",
	});
}

export default Component;
