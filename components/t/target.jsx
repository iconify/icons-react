import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wi-dq8bor.css';
import '../../css/p/php4bw5yx.css';
import '../../css/t/tq30inb_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wi-dq8bor"/><path class="php4bw5yx"/><path class="tq30inb_n"/></g>`,
		"fallback": "icon-park-outline:target",
	});
}

export default Component;
