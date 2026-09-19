import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qii5imb1m.css';
import '../../css/a/aby11gbhi.css';
import '../../css/w/wx82jp4gz.css';
import '../../css/n/nivndc6vt.css';
import '../../css/r/rgv_s4bfe.css';
import '../../css/r/rk_mwg6yo.css';
import '../../css/o/oa7mm6u8v.css';
import '../../css/i/ifmubfb1k.css';
import '../../css/b/bgn4_pb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qii5imb1m"/><path class="aby11gbhi"/><path class="wx82jp4gz"/><path class="nivndc6vt"/><path class="rgv_s4bfe"/><path class="rk_mwg6yo"/><path class="oa7mm6u8v"/><path class="ifmubfb1k"/><path class="bgn4_pb9s"/>`,
		"fallback": "ion:ios-aperture",
	});
}

export default Component;
