import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y52g8ubua.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/x/xc30fvbjn.css';
import '../../css/o/o5_dnnb5d.css';
import '../../css/i/itbph-bbx.css';
import '../../css/m/m8195sbyc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y52g8ubua"/><g class="brzn_0bpr"><path class="xc30fvbjn"/><path class="o5_dnnb5d"/><path class="itbph-bbx"/><circle class="m8195sbyc"/></g>`,
		"fallback": "openmoji:stick-figure-leaning-left",
	});
}

export default Component;
