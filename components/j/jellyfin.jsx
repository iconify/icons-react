import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnhk7kbjm.css';
import '../../css/i/iihwlg_dd.css';
import '../../css/t/tuh-5wb_m.css';
import '../../css/h/hrdr1eb-g.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/utit9ub1r.css';
import '../../css/k/k1noz-wad.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnhk7kbjm"/><path class="iihwlg_dd"/><path class="tuh-5wb_m"/><path class="hrdr1eb-g"/><g class="brzn_0bpr"><path class="utit9ub1r"/><path class="k1noz-wad"/></g>`,
		"fallback": "openmoji:jellyfin",
	});
}

export default Component;
