import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np0p-h43r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np0p-h43r"/>`,
		"fallback": "boxicons:pencil-sparkles-filled",
	});
}

export default Component;
