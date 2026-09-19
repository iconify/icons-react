import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in_3xv-0t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in_3xv-0t"/>`,
		"fallback": "f7:square-stack-3d-down-right-fill",
	});
}

export default Component;
