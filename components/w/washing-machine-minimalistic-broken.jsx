import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kz8j27a0y.css';
import '../../css/b/b-w7m1bnc.css';
import '../../css/t/t8oa_rbgh.css';
import '../../css/f/f00_0pbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kz8j27a0y"/><path class="b-w7m1bnc"/><path class="t8oa_rbgh"/><path class="f00_0pbwr"/></g>`,
		"fallback": "solar:washing-machine-minimalistic-broken",
	});
}

export default Component;
