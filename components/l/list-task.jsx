import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je5g7erlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je5g7erlt"/>`,
		"fallback": "fe:list-task",
	});
}

export default Component;
