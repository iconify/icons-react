import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/eldoky0en.css';
import '../../css/x/xriq4xbwq.css';
import '../../css/h/hkuv9bcyz.css';
import '../../css/e/en1doqb4f.css';
import '../../css/a/a118c9-wg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="eldoky0en"/><rect class="xriq4xbwq"/><circle class="hkuv9bcyz"/><circle class="en1doqb4f"/><path class="a118c9-wg"/></g>`,
		"fallback": "icon-park:videocamera-one",
	});
}

export default Component;
