import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm8kvpb3m.css';
import '../../css/h/hfw3n0cvn.css';
import '../../css/p/pu_w2zbmy.css';
import '../../css/s/sjjpu28zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm8kvpb3m"/><path class="hfw3n0cvn"/><path class="pu_w2zbmy"/><path class="sjjpu28zc"/></g>`,
		"fallback": "andrsrxn:medal-third",
	});
}

export default Component;
