import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk0beob5v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w_1v9_n8e.css';
import '../../css/a/adpkyplhr.css';
import '../../css/m/mc118e5te.css';
import '../../css/u/u6bhi9tzq.css';
import '../../css/t/tipgcvbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk0beob5v secondary"/><g class="dt0cm9dhy primary"><path class="w_1v9_n8e"/><path class="adpkyplhr"/><path class="mc118e5te"/><path class="u6bhi9tzq"/><path class="tipgcvbim"/></g>`,
		"fallback": "iconaut:tea-duo",
	});
}

export default Component;
