import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsl_4ebcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsl_4ebcf"/>`,
		"fallback": "boxicons:star-square-filled",
	});
}

export default Component;
