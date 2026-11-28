import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz46lsbfu.css';
import '../../css/y/yzny45bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rz46lsbfu secondary"/><path class="primary yzny45bvx"/></g>`,
		"fallback": "iconaut:pyramid-duotone",
	});
}

export default Component;
