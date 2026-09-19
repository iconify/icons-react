import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rhc1809ms.css';
import '../../css/p/pz77t9bmc.css';
import '../../css/a/aclgcfbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rhc1809ms"/><path class="pz77t9bmc"/><path class="aclgcfbfw"/></g>`,
		"fallback": "hugeicons:transparency",
	});
}

export default Component;
