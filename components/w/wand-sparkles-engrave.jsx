import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f--02_bkw.css';
import '../../css/t/ttsg-rbur.css';
import '../../css/a/a1xc6ibvk.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/m/mvz-u7b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f--02_bkw wm-k"/><path class="ttsg-rbur wm-a"/><path class="a1xc6ibvk wm-shadow"/><path class="psyzc1_dw wm-k"/><path class="mvz-u7b1a wm-a"/></g>`,
		"fallback": "withicons:wand-sparkles-engrave",
	});
}

export default Component;
