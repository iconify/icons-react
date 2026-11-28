import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rijdllbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary rijdllbpt"/>`,
		"fallback": "iconaut:stroke-line-join-bevel-duotone",
	});
}

export default Component;
