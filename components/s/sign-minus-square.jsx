import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egnx55p7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egnx55p7l"/>`,
		"fallback": "iconamoon:sign-minus-square",
	});
}

export default Component;
