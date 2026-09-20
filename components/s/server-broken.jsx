import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b073u-bnc.css';
import '../../css/z/z_x8n2b5o.css';
import '../../css/r/r3ctkgbit.css';
import '../../css/g/gdo7kub5u.css';
import '../../css/y/ys9pn8ams.css';
import '../../css/f/f72hono6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b073u-bnc"/><path class="z_x8n2b5o"/><path class="r3ctkgbit"/><path class="gdo7kub5u"/><path class="ys9pn8ams"/><path class="f72hono6k"/></g>`,
		"fallback": "solar:server-broken",
	});
}

export default Component;
