import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osmynbc3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osmynbc3o primary"/>`,
		"fallback": "iconaut:pentagon-dashed-duotone",
	});
}

export default Component;
