import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rkx0dbdzu.css';
import '../../css/b/bp47hebjk.css';
import '../../css/c/cpo-sbv4q.css';
import '../../css/i/ir2ohlbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rkx0dbdzu wm-shadow"/><path class="bp47hebjk wm-shadow"/><path class="cpo-sbv4q"/><path class="ir2ohlbyr"/></g>`,
		"fallback": "withicons-brutal:navigation",
	});
}

export default Component;
