import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ych6gh24j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ych6gh24j"/>`,
		"fallback": "proicons:star",
	});
}

export default Component;
