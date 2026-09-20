import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/aqtm5qurd.css';
import '../../css/k/k_u_5xb5m.css';
import '../../css/l/lfsoxomft.css';
import '../../css/e/epye99bse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="aqtm5qurd"/><path class="k_u_5xb5m"/><path class="lfsoxomft"/><path class="epye99bse"/></g>`,
		"fallback": "streamline-sharp-color:transfer-truck-time",
	});
}

export default Component;
