import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/np1o_hbeb.css';
import '../../css/y/yeja1yb7d.css';
import '../../css/u/us2ibl8gx.css';
import '../../css/x/xjg6p3baz.css';
import '../../css/c/cx9tddlgw.css';
import '../../css/m/mika2zbzn.css';
import '../../css/v/vclaqt84l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="np1o_hbeb wm-k"/><path class="wm-a yeja1yb7d"/><path class="us2ibl8gx wm-s"/><path class="wm-shadow xjg6p3baz"/><path class="cx9tddlgw wm-k"/><path class="mika2zbzn wm-a"/><path class="vclaqt84l wm-s"/></g>`,
		"fallback": "withicons:spell-check-engrave",
	});
}

export default Component;
