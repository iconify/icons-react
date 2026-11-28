import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jozev15so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jozev15so primary"/>`,
		"fallback": "iconaut:subscript-duotone",
	});
}

export default Component;
