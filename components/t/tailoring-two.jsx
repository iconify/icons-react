import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x745k6bvp.css';
import '../../css/k/k75hkwblh.css';
import '../../css/l/lzhvv0_2t.css';
import '../../css/e/ep34fo3-c.css';
import '../../css/v/vbxn7_bbf.css';
import '../../css/z/zn5qzp_zu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x745k6bvp"/><path class="k75hkwblh"/><path class="lzhvv0_2t"/><path class="ep34fo3-c"/><path class="vbxn7_bbf"/><path class="zn5qzp_zu"/></g>`,
		"fallback": "icon-park:tailoring-two",
	});
}

export default Component;
