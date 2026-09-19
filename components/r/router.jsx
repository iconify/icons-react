import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skb8opsgk.css';
import '../../css/q/qel8s913f.css';
import '../../css/f/fvxa0x2ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="skb8opsgk"/><path class="qel8s913f"/><path class="fvxa0x2ag"/></g>`,
		"fallback": "hugeicons:router",
	});
}

export default Component;
