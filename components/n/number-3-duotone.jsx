import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e442e8d9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e442e8d9k primary"/>`,
		"fallback": "iconaut:number-3-duotone",
	});
}

export default Component;
