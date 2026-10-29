import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hu6vg3b9l.css';
import '../../css/v/v2g-chbep.css';
import '../../css/h/hqdo8ybls.css';
import '../../css/l/l67rxgg6i.css';
import '../../css/x/x95vpe-7z.css';
import '../../css/j/julgeubpb.css';
import '../../css/u/u-pdhiang.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hu6vg3b9l"/><path class="v2g-chbep wm-k"/><path class="hqdo8ybls wm-k"/><path class="l67rxgg6i wm-k"/><path class="wm-s x95vpe-7z"/><path class="julgeubpb wm-a"/><path class="u-pdhiang wm-s"/></g>`,
		"fallback": "withicons:mithai-box-sketch",
	});
}

export default Component;
