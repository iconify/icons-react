import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca0nzq7-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ca0nzq7-o"/>`,
		"fallback": "iconamoon:type-fill",
	});
}

export default Component;
