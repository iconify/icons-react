import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/si9a9b-pp.css';
import '../../css/q/qj2p2pbru.css';
import '../../css/s/snok9ablg.css';
import '../../css/m/mu0j_g-mw.css';
import '../../css/h/h6nsu2b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="si9a9b-pp"/><path class="qj2p2pbru"/><path class="snok9ablg"/><path class="mu0j_g-mw"/><path class="h6nsu2b8t"/></g>`,
		"fallback": "streamline-sharp-color:round-anchor-point",
	});
}

export default Component;
