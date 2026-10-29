import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pp4twbc7s.css';
import '../../css/e/exte1hb4i.css';
import '../../css/o/open-1a-p.css';
import '../../css/i/iakcnbrfh.css';
import '../../css/u/umh6b8juy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pp4twbc7s wm-k"/><path class="exte1hb4i wm-k"/><path class="open-1a-p wm-k"/><path class="iakcnbrfh wm-k"/><path class="umh6b8juy wm-a"/></g>`,
		"fallback": "withicons:thermometer-sketch",
	});
}

export default Component;
