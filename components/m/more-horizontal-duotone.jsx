import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp294gxeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp294gxeo primary"/>`,
		"fallback": "iconaut:more-horizontal-duotone",
	});
}

export default Component;
