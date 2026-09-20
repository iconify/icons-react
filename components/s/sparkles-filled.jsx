import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk-5euk3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk-5euk3o"/>`,
		"fallback": "reicon:sparkles-filled",
	});
}

export default Component;
