import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug-lo7bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug-lo7bxr"/>`,
		"fallback": "iconaut:number-9-solid",
	});
}

export default Component;
