import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngqzl78hi.css';
import '../../css/k/kk5omtesy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ngqzl78hi"/><path class="kk5omtesy"/></g>`,
		"fallback": "solar:repeat-one-bold-duotone",
	});
}

export default Component;
