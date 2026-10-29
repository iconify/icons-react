import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dqi4ifb3t.css';
import '../../css/n/n-n2__xqz.css';
import '../../css/s/skgel1llp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dqi4ifb3t"/><path class="n-n2__xqz wm-shadow"/><path class="skgel1llp"/></g>`,
		"fallback": "withicons:playground-engrave",
	});
}

export default Component;
