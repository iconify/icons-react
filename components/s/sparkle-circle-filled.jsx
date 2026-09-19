import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h842pnhxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h842pnhxv"/>`,
		"fallback": "boxicons:sparkle-circle-filled",
	});
}

export default Component;
