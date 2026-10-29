import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt14ylbfq.css';
import '../../css/n/ne5rhjbge.css';
import '../../css/n/nvyd-ibnq.css';
import '../../css/m/my9t0zb-c.css';
import '../../css/d/dk2s8pb1b.css';
import '../../css/a/aa0ztyrut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kt14ylbfq wm-k"/><path class="ne5rhjbge wm-k"/><path class="nvyd-ibnq wm-k"/><path class="my9t0zb-c wm-k"/><path class="dk2s8pb1b wm-shine"/><path class="aa0ztyrut wm-a"/></g>`,
		"fallback": "withicons-anime:logs",
	});
}

export default Component;
