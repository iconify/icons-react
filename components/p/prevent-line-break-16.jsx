import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvcrfueyt.css';
import '../../css/h/h_98oxbit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvcrfueyt"/><path class="h_98oxbit"/>`,
		"fallback": "qlementine-icons:prevent-line-break-16",
	});
}

export default Component;
