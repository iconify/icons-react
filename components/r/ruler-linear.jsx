import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c05wbm_mv.css';
import '../../css/d/dbce2h2td.css';
import '../../css/p/pf4lixn8e.css';
import '../../css/b/bnkgx-myi.css';
import '../../css/j/jdt4fscuq.css';
import '../../css/w/wfsodeq0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c05wbm_mv"/><path class="dbce2h2td"/><path class="pf4lixn8e"/><path class="bnkgx-myi"/><path class="jdt4fscuq"/><path class="wfsodeq0b"/></g>`,
		"fallback": "solar:ruler-linear",
	});
}

export default Component;
