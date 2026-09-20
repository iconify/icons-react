import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urs5c65ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urs5c65ih"/>`,
		"fallback": "tabler:square-letter-k-filled",
	});
}

export default Component;
