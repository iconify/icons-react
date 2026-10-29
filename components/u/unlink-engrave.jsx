import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b4yu8ubta.css';
import '../../css/d/dik90hxbh.css';
import '../../css/r/ruuozac9m.css';
import '../../css/e/e0izkne-h.css';
import '../../css/u/unkvyfx-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b4yu8ubta wm-k"/><path class="dik90hxbh wm-s"/><path class="ruuozac9m wm-shadow"/><path class="e0izkne-h wm-k"/><path class="unkvyfx-l wm-s"/></g>`,
		"fallback": "withicons:unlink-engrave",
	});
}

export default Component;
