import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ax-mkhuqw.css';
import '../../css/k/kdjfenbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ax-mkhuqw"/><path class="kdjfenbcq"/></g>`,
		"fallback": "nrk:rectangle-landscape-to-portrait",
	});
}

export default Component;
