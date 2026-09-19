import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km3x3cedu.css';
import '../../css/c/c_pfbfb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="km3x3cedu"/><path clip-rule="evenodd" class="c_pfbfb0h"/>`,
		"fallback": "cuida:rendo-outline",
	});
}

export default Component;
