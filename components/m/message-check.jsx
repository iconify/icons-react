import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y78__mbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y78__mbah"/>`,
		"fallback": "tabler:message-check",
	});
}

export default Component;
