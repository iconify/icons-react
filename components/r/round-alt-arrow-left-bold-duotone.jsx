import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxzlycbfj.css';
import '../../css/z/zak7occpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxzlycbfj"/><path class="zak7occpb"/></g>`,
		"fallback": "solar:round-alt-arrow-left-bold-duotone",
	});
}

export default Component;
