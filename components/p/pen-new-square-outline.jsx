import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6a08_vpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6a08_vpu"/>`,
		"fallback": "solar:pen-new-square-outline",
	});
}

export default Component;
