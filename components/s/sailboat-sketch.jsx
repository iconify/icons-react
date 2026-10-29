import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ip5s8tb9t.css';
import '../../css/l/l7_1lub0r.css';
import '../../css/h/h51zevb-k.css';
import '../../css/z/zn50j-g9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ip5s8tb9t wm-k"/><path class="l7_1lub0r wm-a"/><path class="h51zevb-k wm-k"/><path class="wm-a zn50j-g9r"/></g>`,
		"fallback": "withicons:sailboat-sketch",
	});
}

export default Component;
