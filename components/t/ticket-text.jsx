import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sof9ji8mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sof9ji8mc"/>`,
		"fallback": "majesticons:ticket-text",
	});
}

export default Component;
