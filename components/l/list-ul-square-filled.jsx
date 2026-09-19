import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daapk0d1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daapk0d1u"/>`,
		"fallback": "boxicons:list-ul-square-filled",
	});
}

export default Component;
