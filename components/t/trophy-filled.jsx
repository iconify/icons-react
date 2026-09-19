import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnfsmhb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnfsmhb8d"/>`,
		"fallback": "boxicons:trophy-filled",
	});
}

export default Component;
