import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dse0tvsic.css';
import '../../css/l/lp24f36sk.css';
import '../../css/m/mgqx-iblo.css';
import '../../css/t/tj9j_-bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dse0tvsic"/><path class="lp24f36sk"/><path class="mgqx-iblo"/><path class="tj9j_-bfu"/></g>`,
		"fallback": "andrsrxn:toaster",
	});
}

export default Component;
