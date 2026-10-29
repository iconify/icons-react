import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zkcgbk_eu.css';
import '../../css/z/zengsob3h.css';
import '../../css/e/e_aqre_dg.css';
import '../../css/n/n64u7efyk.css';
import '../../css/m/mb82hcb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zkcgbk_eu"/><path class="wm-k zengsob3h"/><path class="e_aqre_dg wm-a"/><path class="n64u7efyk wm-k"/><path class="mb82hcb_w wm-a"/></g>`,
		"fallback": "withicons:soup-sketch",
	});
}

export default Component;
