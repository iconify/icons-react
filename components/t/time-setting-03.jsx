import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lsa_vml7w.css';
import '../../css/x/xyaurorxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lsa_vml7w"/><path class="xyaurorxt"/></g>`,
		"fallback": "hugeicons:time-setting-03",
	});
}

export default Component;
