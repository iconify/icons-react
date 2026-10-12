import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am0lfowtc.css';
import '../../css/w/w_kvj_6ee.css';
import '../../css/h/h-n_r8bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am0lfowtc"/><path class="w_kvj_6ee"/><path class="h-n_r8bnw"/></g>`,
		"fallback": "andrsrxn:test-tube-sparkle",
	});
}

export default Component;
