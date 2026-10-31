import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p179t_bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p179t_bns"/>`,
		"fallback": "coolicons:toggle-right-round",
	});
}

export default Component;
