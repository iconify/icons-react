import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwvbloz5r.css';
import '../../css/l/lci5694tm.css';
import '../../css/k/ky1jzfbzo.css';
import '../../css/q/qi-rlv_iu.css';
import '../../css/n/npc31oc-u.css';
import '../../css/j/j5sjxfatt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="hwvbloz5r"/><rect class="lci5694tm"/><rect class="ky1jzfbzo"/><rect class="qi-rlv_iu"/><rect class="npc31oc-u"/><path class="j5sjxfatt"/>`,
		"fallback": "ion:qr-code",
	});
}

export default Component;
