import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vf55s1trf.css';
import '../../css/b/bz1utw5hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vf55s1trf"/><path class="bz1utw5hg primary"/></g>`,
		"fallback": "iconaut:receipt-percent-duotone",
	});
}

export default Component;
