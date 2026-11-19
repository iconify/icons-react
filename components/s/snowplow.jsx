import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pru2e3b6y.css';
import '../../css/c/cbv_0y6ux.css';
import '../../css/y/yjfp3rp6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pru2e3b6y"/><path class="cbv_0y6ux"/><path class="yjfp3rp6o"/></g>`,
		"fallback": "andrsrxn:snowplow",
	});
}

export default Component;
