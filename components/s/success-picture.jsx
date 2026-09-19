import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_9nbbmkw.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/o/o7ck84b0h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_9nbbmkw"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="o7ck84b0h"/></g>`,
		"fallback": "icon-park:success-picture",
	});
}

export default Component;
