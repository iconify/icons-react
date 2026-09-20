import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dph7idlpo.css';
import '../../css/j/jjc_0eb0c.css';
import '../../css/g/gvlixzb-w.css';
import '../../css/q/qowmweb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dph7idlpo"/><path class="jjc_0eb0c"/><path class="gvlixzb-w"/><path class="qowmweb6d"/></g>`,
		"fallback": "streamline-ultimate:network-pin",
	});
}

export default Component;
