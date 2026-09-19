import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clar4rilh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clar4rilh"/>`,
		"fallback": "boxicons:sparkles-alt-filled",
	});
}

export default Component;
