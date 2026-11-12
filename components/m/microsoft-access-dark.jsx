import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfv5_ki6e.css';
import '../../css/i/iic3dfb3r.css';
import '../../css/w/wv8t68bmv.css';
import '../../css/v/vvmcp5lth.css';
import '../../css/q/qnwkdkb_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfv5_ki6e"/><path class="iic3dfb3r"/><path class="wv8t68bmv"/><path class="vvmcp5lth"/><path class="qnwkdkb_j"/>`,
		"fallback": "selfhst:microsoft-access-dark",
	});
}

export default Component;
