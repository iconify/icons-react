import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5fkynbrb.css';
import '../../css/f/fgvk_fggm.css';
import '../../css/s/s0s2anbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d5fkynbrb"/><path class="fgvk_fggm"/><path clip-rule="evenodd" class="s0s2anbtz"/></g>`,
		"fallback": "solar:routing-2-bold",
	});
}

export default Component;
