import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/b/bwtkenb5i.css';
import '../../css/o/oy0s_htxh.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/uuzlah-2o.css';
import '../../css/n/nb6mbohli.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="bwtkenb5i"/><path class="oy0s_htxh"/></g><g class="ij2x_72vy"><path class="uuzlah-2o"/><path class="nb6mbohli"/></g>`,
		"fallback": "openmoji:no-entry",
	});
}

export default Component;
