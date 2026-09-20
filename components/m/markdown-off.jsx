import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zr1l_kl2t.css';
import '../../css/j/j5ink7pxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zr1l_kl2t"/><path class="j5ink7pxw"/></g>`,
		"fallback": "tabler:markdown-off",
	});
}

export default Component;
