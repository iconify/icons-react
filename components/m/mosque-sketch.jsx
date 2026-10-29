import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w5wcaxskk.css';
import '../../css/x/xlcd5qbeq.css';
import '../../css/d/d-tr2fb7r.css';
import '../../css/i/ii_20en4n.css';
import '../../css/j/jv10pq-vg.css';
import '../../css/a/ankdckbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w5wcaxskk wm-k"/><path class="wm-a xlcd5qbeq"/><path class="d-tr2fb7r wm-s"/><path class="ii_20en4n wm-k"/><path class="jv10pq-vg wm-a"/><path class="ankdckbvk wm-s"/></g>`,
		"fallback": "withicons:mosque-sketch",
	});
}

export default Component;
