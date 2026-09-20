import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5cqyabqx.css';
import '../../css/u/uuwchf_9c.css';
import '../../css/k/kgqskh4kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="q5cqyabqx"/><path class="uuwchf_9c"/><path clip-rule="evenodd" class="kgqskh4kt"/></g>`,
		"fallback": "proicons:photo-add",
	});
}

export default Component;
