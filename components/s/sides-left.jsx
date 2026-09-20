import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p7_etkbcz.css';
import '../../css/w/wgcp-i4hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="p7_etkbcz"/><path vector-effect="non-scaling-stroke" class="wgcp-i4hn"/></g>`,
		"fallback": "wordpress:sides-left",
	});
}

export default Component;
