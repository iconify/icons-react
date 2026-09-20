import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np-sskbor.css';
import '../../css/j/jsr-a6v3g.css';
import '../../css/t/t-sci2y1e.css';
import '../../css/y/y0c2lnwwu.css';
import '../../css/m/mrqxd1bkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np-sskbor"/><path class="jsr-a6v3g"/><path class="t-sci2y1e"/><path class="y0c2lnwwu"/><path class="mrqxd1bkj"/>`,
		"fallback": "selfhst:streamx-dark",
	});
}

export default Component;
