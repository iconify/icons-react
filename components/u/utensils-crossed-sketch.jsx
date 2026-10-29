import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ofv9jmb_s.css';
import '../../css/g/gyxdggaoa.css';
import '../../css/r/r7pcl4hir.css';
import '../../css/s/sxknq0szb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ofv9jmb_s wm-k"/><path class="gyxdggaoa wm-a"/><path class="r7pcl4hir wm-k"/><path class="sxknq0szb wm-a"/></g>`,
		"fallback": "withicons:utensils-crossed-sketch",
	});
}

export default Component;
