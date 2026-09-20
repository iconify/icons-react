import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7b8dez1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7b8dez1j"/>`,
		"fallback": "keyline-icons:square-arrow-down-right-fill",
	});
}

export default Component;
