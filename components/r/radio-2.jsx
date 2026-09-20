import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9_t36bgu.css';
import '../../css/o/ov9pr7bxz.css';
import '../../css/q/qn99s1bkd.css';
import '../../css/i/izrr8_ald.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9_t36bgu"/><path class="ov9pr7bxz"/><path class="qn99s1bkd"/><path class="izrr8_ald"/></g>`,
		"fallback": "tdesign:radio-2",
	});
}

export default Component;
