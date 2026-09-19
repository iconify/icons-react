import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atj2izbhg.css';
import '../../css/l/lnimcrbzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="atj2izbhg"/><path class="lnimcrbzz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rooster",
	});
}

export default Component;
