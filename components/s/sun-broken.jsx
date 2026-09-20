import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lq7a-_8su.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/q/qi4ad9bta.css';
import '../../css/i/i0kw3he6n.css';
import '../../css/p/pkibk1t_y.css';
import '../../css/x/xg9pqqbmx.css';
import '../../css/v/v6d0d7_pf.css';
import '../../css/n/n_csmurbe.css';
import '../../css/m/mgzczt2-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lq7a-_8su"/><path class="pq5xj2bli"/><path class="qi4ad9bta"/><path class="i0kw3he6n"/><path class="pkibk1t_y"/><path class="xg9pqqbmx"/><path class="v6d0d7_pf"/><path class="n_csmurbe"/><path class="mgzczt2-e"/></g>`,
		"fallback": "solar:sun-broken",
	});
}

export default Component;
