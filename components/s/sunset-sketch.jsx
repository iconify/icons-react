import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nkg1agbyx.css';
import '../../css/g/gxqk5yt0t.css';
import '../../css/t/txnheqbrz.css';
import '../../css/l/l_1qa9brg.css';
import '../../css/d/duzqyrybg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nkg1agbyx wm-k"/><path class="gxqk5yt0t wm-s"/><path class="txnheqbrz wm-k"/><path class="l_1qa9brg wm-a"/><path class="duzqyrybg wm-s"/></g>`,
		"fallback": "withicons:sunset-sketch",
	});
}

export default Component;
