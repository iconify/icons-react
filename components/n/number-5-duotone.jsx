import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btvctjylv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btvctjylv primary"/>`,
		"fallback": "iconaut:number-5-duotone",
	});
}

export default Component;
