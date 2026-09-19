import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goi3j1wdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goi3j1wdz"/>`,
		"fallback": "boxicons:lock-filled",
	});
}

export default Component;
