import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tpp0ln23i.css';
import '../../css/t/t2lb9k7zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tpp0ln23i"/><path clip-rule="evenodd" class="t2lb9k7zi"/></g>`,
		"fallback": "reicon:signpost2",
	});
}

export default Component;
