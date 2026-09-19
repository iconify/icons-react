import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef24_sbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef24_sbbb"/>`,
		"fallback": "boxicons:pickup-truck",
	});
}

export default Component;
