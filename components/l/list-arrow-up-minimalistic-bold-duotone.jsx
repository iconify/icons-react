import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njztxpq7z.css';
import '../../css/s/snz35lb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="njztxpq7z"/><path class="snz35lb2j"/></g>`,
		"fallback": "solar:list-arrow-up-minimalistic-bold-duotone",
	});
}

export default Component;
