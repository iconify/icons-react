import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2_n4rb-e.css';
import '../../css/i/isheuc-qp.css';
import '../../css/r/r9k2-n4dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2_n4rb-e"/><path class="isheuc-qp"/><path class="r9k2-n4dv"/></g>`,
		"fallback": "reicon:volleyball2-duotone",
	});
}

export default Component;
