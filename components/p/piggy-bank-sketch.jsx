import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nkv6ox-um.css';
import '../../css/a/aewt85m1n.css';
import '../../css/t/tw2yi0b2x.css';
import '../../css/g/gsmwzvboi.css';
import '../../css/n/n2b3okm6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nkv6ox-um"/><path class="aewt85m1n wm-k"/><path class="tw2yi0b2x wm-k"/><path class="gsmwzvboi wm-a"/><path class="n2b3okm6x wm-s"/></g>`,
		"fallback": "withicons:piggy-bank-sketch",
	});
}

export default Component;
