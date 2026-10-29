import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j0q-3cnxm.css';
import '../../css/v/vlq966tqd.css';
import '../../css/k/kg_ct3kkb.css';
import '../../css/n/nemamfnau.css';
import '../../css/h/ht_dcpb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j0q-3cnxm"/><path class="vlq966tqd wm-k"/><path class="kg_ct3kkb wm-a"/><path class="nemamfnau wm-k"/><path class="ht_dcpb3v wm-a"/></g>`,
		"fallback": "withicons:shield-check-sketch",
	});
}

export default Component;
