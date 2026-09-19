import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j79gsgb3b.css';
import '../../css/b/bg5-es3pu.css';
import '../../css/s/silx_qdiv.css';
import '../../css/x/xrtu0pbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j79gsgb3b"/><path class="bg5-es3pu"/><path class="silx_qdiv"/><path class="xrtu0pbiv"/></g>`,
		"fallback": "hugeicons:store-location-02",
	});
}

export default Component;
