import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzxzyxnbb.css';
import '../../css/h/ha4illbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vzxzyxnbb"/><path class="ha4illbak"/></g>`,
		"fallback": "solar:list-arrow-up-bold-duotone",
	});
}

export default Component;
