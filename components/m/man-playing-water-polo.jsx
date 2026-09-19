import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moxluzb8y.css';
import '../../css/i/iocob7nsb.css';
import '../../css/b/bflu38a7x.css';
import '../../css/k/kbi7o2brg.css';
import '../../css/y/y85xttbtj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="moxluzb8y"/><path class="iocob7nsb"/><path class="bflu38a7x"/><path class="kbi7o2brg"/><path class="y85xttbtj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-playing-water-polo",
	});
}

export default Component;
