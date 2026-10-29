import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d_y8no7jp.css';
import '../../css/l/l2b72nbfo.css';
import '../../css/j/j-sy16q0y.css';
import '../../css/y/y543w2xot.css';
import '../../css/f/fcwbjtbjp.css';
import '../../css/u/u4bse819v.css';
import '../../css/o/oy4kjja7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d_y8no7jp wm-k"/><path class="l2b72nbfo wm-a"/><path class="j-sy16q0y wm-shadow"/><path class="wm-k y543w2xot"/><path class="fcwbjtbjp wm-k"/><path class="u4bse819v wm-a"/><path class="oy4kjja7d wm-k"/></g>`,
		"fallback": "withicons:puja-thali-engrave",
	});
}

export default Component;
