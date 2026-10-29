import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d-eta1b4h.css';
import '../../css/j/jn55h_b1t.css';
import '../../css/z/zdf4x0dcp.css';
import '../../css/s/sjvkn5w2h.css';
import '../../css/j/j79vh-b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d-eta1b4h wm-k"/><path class="jn55h_b1t wm-a"/><path class="wm-shadow zdf4x0dcp"/><path class="sjvkn5w2h wm-k"/><path class="j79vh-b8k wm-a"/></g>`,
		"fallback": "withicons:rabbit-engrave",
	});
}

export default Component;
