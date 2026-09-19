import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tl99pgbsq.css';
import '../../css/p/p2x89j7kn.css';
import '../../css/x/x8b6-xbjm.css';
import '../../css/j/jukgf_zmf.css';
import '../../css/k/kmq3_ccou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="tl99pgbsq"/><path class="p2x89j7kn"/><path class="x8b6-xbjm"/><path class="jukgf_zmf"/><path class="kmq3_ccou"/></g>`,
		"fallback": "hugeicons:kissing",
	});
}

export default Component;
