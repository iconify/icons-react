import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jto8zzmnb.css';
import '../../css/y/ypeg7n85z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jto8zzmnb"/><path class="ypeg7n85z"/></g>`,
		"fallback": "rivet-icons:map-pin",
	});
}

export default Component;
