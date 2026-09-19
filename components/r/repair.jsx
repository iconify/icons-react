import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x3gf7-bft.css';
import '../../css/t/tg1iw57om.css';
import '../../css/z/zfuc2hcbm.css';
import '../../css/t/tr_v09_tm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="x3gf7-bft"/><path class="tg1iw57om"/><path class="zfuc2hcbm"/><path class="tr_v09_tm"/></g>`,
		"fallback": "icon-park:repair",
	});
}

export default Component;
