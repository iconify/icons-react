import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uen_p8-7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uen_p8-7q"/>`,
		"fallback": "solar:list-up-minimalistic-outline",
	});
}

export default Component;
