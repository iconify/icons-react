import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_4ieh74j.css';
import '../../css/e/et458ylyp.css';
import '../../css/s/s2ms_0w6v.css';
import '../../css/j/jko7jdb1p.css';
import '../../css/k/k1uq304yb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_4ieh74j"/><path class="et458ylyp"/><path class="s2ms_0w6v"/><path class="jko7jdb1p"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k1uq304yb"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k1uq304yb"/></g>`,
		"fallback": "icon-park:upload-web",
	});
}

export default Component;
