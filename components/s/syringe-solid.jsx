import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rpm_tuvkx.css';
import '../../css/l/lbncfcbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rpm_tuvkx"/><path class="lbncfcbbi wm-a"/></g>`,
		"fallback": "withicons:syringe-solid",
	});
}

export default Component;
