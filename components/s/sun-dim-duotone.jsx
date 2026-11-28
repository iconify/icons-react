import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smc8lgbuw.css';
import '../../css/c/c5df31sfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary smc8lgbuw"/><path class="c5df31sfd primary"/></g>`,
		"fallback": "iconaut:sun-dim-duotone",
	});
}

export default Component;
