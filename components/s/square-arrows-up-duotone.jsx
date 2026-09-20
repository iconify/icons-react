import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_d738b5m.css';
import '../../css/n/n05h0ubiq.css';
import '../../css/q/qbvbg5nfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z_d738b5m"/><path class="n05h0ubiq"/><path class="qbvbg5nfn"/></g>`,
		"fallback": "reicon:square-arrows-up-duotone",
	});
}

export default Component;
