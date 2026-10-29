import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v-483rb4t.css';
import '../../css/g/g2wwaeb3g.css';
import '../../css/b/b2sz1838t.css';
import '../../css/b/b5jcl5blk.css';
import '../../css/x/xk6eoibzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v-483rb4t wm-k"/><path class="g2wwaeb3g wm-a"/><path class="b2sz1838t wm-shadow"/><path class="b5jcl5blk wm-k"/><path class="wm-a xk6eoibzj"/></g>`,
		"fallback": "withicons:person-standing-engrave",
	});
}

export default Component;
