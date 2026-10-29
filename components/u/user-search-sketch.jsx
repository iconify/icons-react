import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yi6lqbb5x.css';
import '../../css/u/urp_3vpiq.css';
import '../../css/r/r-718ec7i.css';
import '../../css/z/zer89gupx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yi6lqbb5x"/><path class="urp_3vpiq wm-k"/><path class="r-718ec7i wm-s"/><path class="wm-s zer89gupx"/></g>`,
		"fallback": "withicons:user-search-sketch",
	});
}

export default Component;
