import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssn04g5yo.css';
import '../../css/n/nchjemjdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ssn04g5yo"/><path class="nchjemjdp primary"/></g>`,
		"fallback": "iconaut:mic-duotone",
	});
}

export default Component;
