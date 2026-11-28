import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpfoe4jqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpfoe4jqu"/>`,
		"fallback": "iconaut:number-9-duo",
	});
}

export default Component;
