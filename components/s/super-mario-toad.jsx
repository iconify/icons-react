import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cp8usnbhx.css';
import '../../css/p/pfa5-ccck.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/b/bvi2--lni.css';
import '../../css/l/l77qzgmuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cp8usnbhx"/><path class="pfa5-ccck"/><circle class="z2o0ujiuj"/><path class="bvi2--lni"/><path class="l77qzgmuj"/></g>`,
		"fallback": "hugeicons:super-mario-toad",
	});
}

export default Component;
