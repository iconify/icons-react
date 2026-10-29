import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zzot_onjx.css';
import '../../css/k/kmig01bhu.css';
import '../../css/f/fmarqootd.css';
import '../../css/b/bfxhibc1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zzot_onjx"/><path class="kmig01bhu wm-k"/><path class="fmarqootd wm-k"/><path class="bfxhibc1f wm-a"/></g>`,
		"fallback": "withicons:star-half-sketch",
	});
}

export default Component;
