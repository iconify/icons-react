import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c3ls5nbaa.css';
import '../../css/x/xru6xobqx.css';
import '../../css/e/e-hz-ti3g.css';
import '../../css/y/yeskuobie.css';
import '../../css/p/p70io6b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c3ls5nbaa"/><path class="wm-k xru6xobqx"/><path class="e-hz-ti3g wm-k"/><path class="wm-a yeskuobie"/><path class="p70io6b2r wm-s"/></g>`,
		"fallback": "withicons:spider-sketch",
	});
}

export default Component;
