import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/k/ka8l4va7q.css';
import '../../css/x/xmk23esdg.css';
import '../../css/w/wh_-q3brf.css';
import '../../css/h/hpkj_ib9b.css';
import '../../css/g/g2pb_4bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="ka8l4va7q"/><path class="xmk23esdg"/><path class="wh_-q3brf"/><path class="hpkj_ib9b"/><path class="g2pb_4bba"/></g>`,
		"fallback": "solar:moon-fog-line-duotone",
	});
}

export default Component;
