import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke_8k_97h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke_8k_97h"/>`,
		"fallback": "andrsrxn:text-to-speech",
	});
}

export default Component;
