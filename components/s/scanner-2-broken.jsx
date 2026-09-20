import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kruqtab-m.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/r/ros5bvrws.css';
import '../../css/s/sthj-0bog.css';
import '../../css/c/csr3o-baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kruqtab-m"/><path class="x-1lf64uh"/><path class="ros5bvrws"/><path class="sthj-0bog"/><path class="csr3o-baz"/></g>`,
		"fallback": "solar:scanner-2-broken",
	});
}

export default Component;
