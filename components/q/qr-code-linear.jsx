import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m5c-lqbgh.css';
import '../../css/n/ni_aolb2y.css';
import '../../css/w/w_i_8jbls.css';
import '../../css/h/h5gugpboa.css';
import '../../css/v/vmgsjob4k.css';
import '../../css/b/bqwacwecr.css';
import '../../css/x/xtlidccog.css';
import '../../css/a/ayxjnlb7y.css';
import '../../css/e/ee19phd6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m5c-lqbgh"/><path class="ni_aolb2y"/><path class="w_i_8jbls"/><path class="h5gugpboa"/><path class="vmgsjob4k"/><path class="bqwacwecr"/><path class="xtlidccog"/><path class="ayxjnlb7y"/><path class="ee19phd6f"/></g>`,
		"fallback": "solar:qr-code-linear",
	});
}

export default Component;
