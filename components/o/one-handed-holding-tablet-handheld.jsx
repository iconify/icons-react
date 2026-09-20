import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lu90d1baq.css';
import '../../css/c/cp3cgcbyu.css';
import '../../css/p/pzz88hb1t.css';
import '../../css/y/yz0-4dmpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lu90d1baq"/><path class="cp3cgcbyu"/><path class="pzz88hb1t"/><path class="yz0-4dmpa"/></g>`,
		"fallback": "streamline-sharp-color:one-handed-holding-tablet-handheld",
	});
}

export default Component;
