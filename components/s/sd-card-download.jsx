import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t29y10b7v.css';
import '../../css/t/t3osfccmt.css';
import '../../css/p/pfl1oabuy.css';
import '../../css/n/no_ar1xgm.css';
import '../../css/d/ds1758buz.css';
import '../../css/g/go69xh3et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t29y10b7v"/><path class="t3osfccmt"/><path class="pfl1oabuy"/><path class="no_ar1xgm"/><path class="ds1758buz"/><path class="go69xh3et"/></g>`,
		"fallback": "streamline-ultimate-color:sd-card-download",
	});
}

export default Component;
