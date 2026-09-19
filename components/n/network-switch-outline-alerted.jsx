import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpiv946-w.css';
import '../../css/m/mz5d4wbgm.css';
import '../../css/s/s2a7yel-p.css';
import '../../css/v/vh_d_6vor.css';
import '../../css/g/gv8y0mspx.css';
import '../../css/z/zisfjpbgh.css';
import '../../css/w/wtsiw1b2z.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted mpiv946-w"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted mz5d4wbgm"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted s2a7yel-p"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted vh_d_6vor"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted gv8y0mspx"/><path class="clr-i-outline--alerted clr-i-outline-path-6--alerted zisfjpbgh"/><path class="clr-i-outline--alerted clr-i-outline-path-7--alerted wtsiw1b2z"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-8--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:network-switch-outline-alerted",
	});
}

export default Component;
