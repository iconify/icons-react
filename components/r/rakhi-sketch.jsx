import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c8i5flb4l.css';
import '../../css/a/acc9nobeq.css';
import '../../css/x/xbkcgpbuj.css';
import '../../css/y/yft4l7x7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c8i5flb4l wm-deco"/><path class="acc9nobeq wm-k"/><path class="wm-a xbkcgpbuj"/><circle class="wm-s yft4l7x7i"/></g>`,
		"fallback": "withicons:rakhi-sketch",
	});
}

export default Component;
