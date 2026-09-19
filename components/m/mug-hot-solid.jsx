import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k_u5kmwwg.css';
import '../../css/v/vuttg4saf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k_u5kmwwg"/><path clip-rule="evenodd" class="vuttg4saf"/></g>`,
		"fallback": "flowbite:mug-hot-solid",
	});
}

export default Component;
