import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/purcbkvjm.css';
import '../../css/u/ucmmg78pb.css';
import '../../css/h/h75qk2bse.css';
import '../../css/g/gi9zy4bja.css';
import '../../css/f/fbnn_3bad.css';
import '../../css/g/gvyc-o7fz.css';
import '../../css/r/rgnmckb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="purcbkvjm"/><path class="ucmmg78pb"/><path class="h75qk2bse"/><path class="gi9zy4bja"/><path class="fbnn_3bad"/><circle class="gvyc-o7fz"/><path class="rgnmckb3y"/></g>`,
		"fallback": "solar:playlist-minimalistic-2-line-duotone",
	});
}

export default Component;
