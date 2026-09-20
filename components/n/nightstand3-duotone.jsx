import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz2bszbjw.css';
import '../../css/f/f9ka7ux3q.css';
import '../../css/c/cso0oobet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zz2bszbjw"/><path class="f9ka7ux3q"/><path class="cso0oobet"/></g>`,
		"fallback": "reicon:nightstand3-duotone",
	});
}

export default Component;
