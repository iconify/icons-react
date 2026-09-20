import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9nmz-bww.css';
import '../../css/c/cwg1ldb1m.css';
import '../../css/c/cmn5gt6_s.css';
import '../../css/a/a97f931wf.css';
import '../../css/g/gu_oldb6k.css';
import '../../css/z/zj_x-k1pv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d9nmz-bww"/><path class="cwg1ldb1m"/><path class="cmn5gt6_s"/><path class="a97f931wf"/><path class="gu_oldb6k"/><path class="zj_x-k1pv"/></g>`,
		"fallback": "streamline-flex-color:signal-full",
	});
}

export default Component;
