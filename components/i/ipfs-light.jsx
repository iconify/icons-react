import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv5149b2n.css';
import '../../css/f/fc1chxb1r.css';
import '../../css/f/fhl3-hbkm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv5149b2n"/><path class="fc1chxb1r"/><path class="fhl3-hbkm"/>`,
		"fallback": "selfhst:ipfs-light",
	});
}

export default Component;
