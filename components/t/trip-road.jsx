import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bnjfydb1h.css';
import '../../css/l/l511d0j7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bnjfydb1h"/><path class="l511d0j7d"/></g>`,
		"fallback": "streamline-ultimate:trip-road",
	});
}

export default Component;
