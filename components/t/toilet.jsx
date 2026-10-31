import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ua6r0wmxl.css';
import '../../css/g/gtkg3_wto.css';
import '../../css/d/dvltyoqcq.css';
import '../../css/s/s16gv1b1k.css';
import '../../css/w/wo0whcp4j.css';
import '../../css/n/nqjt_5bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ua6r0wmxl wm-shadow"/><path class="gtkg3_wto wm-shadow"/><path class="dvltyoqcq"/><path class="s16gv1b1k"/><path class="wo0whcp4j"/><path class="nqjt_5bjd"/></g>`,
		"fallback": "withicons-brutal:toilet",
	});
}

export default Component;
