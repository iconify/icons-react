import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gb3vtejwz.css';
import '../../css/l/lmfsi8bqv.css';
import '../../css/d/d0l7ov6dg.css';
import '../../css/t/tk78z4b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gb3vtejwz"/><path class="lmfsi8bqv"/><path class="d0l7ov6dg"/><path class="tk78z4b2n"/></g>`,
		"fallback": "solar:user-speak-bold",
	});
}

export default Component;
