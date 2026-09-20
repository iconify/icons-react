import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ednw0_ppv.css';
import '../../css/m/mm8xf6b6f.css';
import '../../css/h/hfbpsmb9n.css';
import '../../css/m/mcygwg75r.css';
import '../../css/u/uczq34bqh.css';
import '../../css/l/l35_2j54w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ednw0_ppv"/><path class="mm8xf6b6f"/><path class="hfbpsmb9n"/><path class="mcygwg75r"/><path class="uczq34bqh"/><path class="l35_2j54w"/></g>`,
		"fallback": "streamline-color:production-belt",
	});
}

export default Component;
