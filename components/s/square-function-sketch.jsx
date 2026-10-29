import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qp_3d5bfd.css';
import '../../css/d/djut3k-ln.css';
import '../../css/k/kt7wgubkd.css';
import '../../css/g/gmw4v2fmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qp_3d5bfd"/><path class="djut3k-ln wm-a"/><path class="kt7wgubkd wm-k"/><path class="gmw4v2fmm wm-a"/></g>`,
		"fallback": "withicons:square-function-sketch",
	});
}

export default Component;
