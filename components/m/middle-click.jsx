import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/n_ndx-jtg.css';
import '../../css/u/ue1cwsbvg.css';
import '../../css/a/aodmmac_n.css';
import '../../css/n/nww-nkb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="n_ndx-jtg"/><path class="ue1cwsbvg"/><path class="aodmmac_n"/><path class="nww-nkb8w"/></g>`,
		"fallback": "streamline-sharp-color:middle-click",
	});
}

export default Component;
