import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/k/ksk-p4h0f.css';
import '../../css/r/r4b2_sbci.css';
import '../../css/i/iz373ssud.css';
import '../../css/x/x2u5nntyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="ksk-p4h0f"/><path class="r4b2_sbci"/><path class="iz373ssud"/><path clip-rule="evenodd" class="x2u5nntyo"/></g>`,
		"fallback": "streamline-kameleon-color:popcorn-duo",
	});
}

export default Component;
