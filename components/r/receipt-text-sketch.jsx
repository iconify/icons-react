import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aoplr74jp.css';
import '../../css/e/etyvj2b-j.css';
import '../../css/l/lxmb61mfr.css';
import '../../css/w/wv9xrqw2w.css';
import '../../css/b/bym_ymbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aoplr74jp"/><path class="etyvj2b-j wm-k"/><path class="lxmb61mfr wm-a"/><path class="wm-k wv9xrqw2w"/><path class="bym_ymbba wm-a"/></g>`,
		"fallback": "withicons:receipt-text-sketch",
	});
}

export default Component;
