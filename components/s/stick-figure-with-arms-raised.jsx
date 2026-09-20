import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brzn_0bpr.css';
import '../../css/e/eg3fyqypm.css';
import '../../css/s/sma9a6bqv.css';
import '../../css/m/m8195sbyc.css';
import '../../css/s/srj5utbht.css';
import '../../css/c/clvrsyb1i.css';
import '../../css/a/amdgd3uqu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="brzn_0bpr"><path class="eg3fyqypm"/><path class="sma9a6bqv"/><circle class="m8195sbyc"/><path class="srj5utbht"/><path class="clvrsyb1i"/><path class="amdgd3uqu"/></g>`,
		"fallback": "openmoji:stick-figure-with-arms-raised",
	});
}

export default Component;
