import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/buvdbfbht.css';
import '../../css/u/ul5n8zbqi.css';
import '../../css/p/pou7dl5dq.css';
import '../../css/y/yt8-h8bsb.css';
import '../../css/c/cjj81ggta.css';
import '../../css/f/fl9qasb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="buvdbfbht wm-k"/><path class="ul5n8zbqi wm-a"/><path class="pou7dl5dq wm-shadow"/><path class="wm-k yt8-h8bsb"/><path class="cjj81ggta wm-a"/><path class="fl9qasb6v wm-a"/></g>`,
		"fallback": "withicons:replace-engrave",
	});
}

export default Component;
