import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/her-4fbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="her-4fbni"/>`,
		"fallback": "uim:list-ul",
	});
}

export default Component;
