import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l911c10ro.css';
import '../../css/o/owjtq1bck.css';
import '../../css/b/bscpnfz0g.css';
import '../../css/n/nr8-grdud.css';
import '../../css/b/bzia22n1w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l911c10ro"/><path class="owjtq1bck"/><path class="bscpnfz0g"/><path class="nr8-grdud"/><path class="bzia22n1w"/>`,
		"fallback": "devicon:latex",
	});
}

export default Component;
