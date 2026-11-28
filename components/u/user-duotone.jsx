import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lrlb2gb_j.css';
import '../../css/q/q3-uahixp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lrlb2gb_j secondary"/><path class="primary q3-uahixp"/></g>`,
		"fallback": "iconaut:user-duotone",
	});
}

export default Component;
