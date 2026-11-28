import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfm3n-qmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfm3n-qmc primary"/>`,
		"fallback": "iconaut:square-split-horizontal-duotone",
	});
}

export default Component;
