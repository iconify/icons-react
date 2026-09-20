import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecto0z3-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecto0z3-j"/>`,
		"fallback": "keyline-icons:square-chevrons-left-fill",
	});
}

export default Component;
