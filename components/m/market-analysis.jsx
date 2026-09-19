import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y93so2a_n.css';
import '../../css/k/kbwz4fv-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="y93so2a_n"/><path class="kbwz4fv-v"/></g>`,
		"fallback": "icon-park-outline:market-analysis",
	});
}

export default Component;
