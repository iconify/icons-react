import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnwis3bxs.css';
import '../../css/i/indak7m3m.css';
import '../../css/l/l5nfperrg.css';
import '../../css/d/dyawbzbqh.css';
import '../../css/i/ij79_gt6o.css';
import '../../css/j/jyw491ymo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bnwis3bxs wm-k"/><path class="indak7m3m wm-s"/><path class="l5nfperrg wm-deco"/><path class="dyawbzbqh wm-k"/><path class="ij79_gt6o wm-s"/><path class="jyw491ymo wm-shadow"/></g>`,
		"fallback": "withicons-valentine:package-plus",
	});
}

export default Component;
