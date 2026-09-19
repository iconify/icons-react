import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vq_9koh7c.css';
import '../../css/l/lsjoge_0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="vq_9koh7c"/><path class="lsjoge_0j"/></g>`,
		"fallback": "icon-park-outline:return",
	});
}

export default Component;
