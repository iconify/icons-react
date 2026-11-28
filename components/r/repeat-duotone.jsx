import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc99f6svk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc99f6svk primary"/>`,
		"fallback": "iconaut:repeat-duotone",
	});
}

export default Component;
