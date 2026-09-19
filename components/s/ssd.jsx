import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvhdk6bks.css';
import '../../css/r/rzzzk2g-f.css';
import '../../css/t/tn0uqua-i.css';
import '../../css/f/fsyzf-b_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvhdk6bks"/><path class="rzzzk2g-f"/><circle class="tn0uqua-i"/><path class="fsyzf-b_i"/></g>`,
		"fallback": "icon-park-outline:ssd",
	});
}

export default Component;
