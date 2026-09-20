import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce_v1otid.css';
import '../../css/i/i_xqkgcuh.css';
import '../../css/t/tw_7s6b8r.css';
import '../../css/o/ofdw__inh.css';
import '../../css/j/j4jcajbfq.css';
import '../../css/s/scl2a1b5a.css';
import '../../css/j/ji3byv7qt.css';
import '../../css/j/jzx08jtvn.css';
import '../../css/o/oqljh9zsi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ce_v1otid"/><path class="i_xqkgcuh"/><path class="tw_7s6b8r"/><path class="ofdw__inh"/><circle class="j4jcajbfq"/><path class="scl2a1b5a"/><path class="ji3byv7qt"/><circle class="jzx08jtvn"/><path class="oqljh9zsi"/>`,
		"fallback": "openmoji:mobile-info",
	});
}

export default Component;
