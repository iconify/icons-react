import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xsiiobcvs.css';
import '../../css/i/iq0j3ibeh.css';
import '../../css/x/xdqw6obrh.css';
import '../../css/c/cjqmx4fpw.css';
import '../../css/t/tv2-46qgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xsiiobcvs"/><path class="iq0j3ibeh wm-a"/><path class="wm-shadow xdqw6obrh"/><path class="cjqmx4fpw wm-k"/><path class="tv2-46qgh wm-a"/></g>`,
		"fallback": "withicons:trending-down-engrave",
	});
}

export default Component;
