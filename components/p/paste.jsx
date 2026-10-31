import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qk796gbsi.css';
import '../../css/k/k-_lk-5of.css';
import '../../css/f/fna_fvbbx.css';
import '../../css/m/mbman72ca.css';
import '../../css/y/ys7o-8b0n.css';
import '../../css/e/etjci_b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qk796gbsi wm-shadow"/><path class="k-_lk-5of"/><path class="fna_fvbbx"/><path class="mbman72ca"/><path class="ys7o-8b0n"/><path class="etjci_b1g"/></g>`,
		"fallback": "withicons-retro:paste",
	});
}

export default Component;
