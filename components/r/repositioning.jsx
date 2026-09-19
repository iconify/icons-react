import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u1m_hydnn.css';
import '../../css/v/vq3xrxbjv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="u1m_hydnn"/><path class="vq3xrxbjv"/></g>`,
		"fallback": "icon-park-outline:repositioning",
	});
}

export default Component;
