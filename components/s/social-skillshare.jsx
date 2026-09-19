import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpxrm4sfi.css';
import '../../css/i/izr5nurmq.css';
import '../../css/u/u9bid-erq.css';
import '../../css/o/ogibbhbay.css';
import '../../css/z/zcgznuxmm.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpxrm4sfi"/><path class="izr5nurmq"/><path class="u9bid-erq"/><path class="ogibbhbay"/><path class="zcgznuxmm"/>`,
		"fallback": "foundation:social-skillshare",
	});
}

export default Component;
