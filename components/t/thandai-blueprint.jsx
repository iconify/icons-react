import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w30tc0baw.css';
import '../../css/w/ws3ndf7es.css';
import '../../css/h/h5rxt79wz.css';
import '../../css/d/d8hvsle5g.css';
import '../../css/x/xpahp5btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="w30tc0baw wm-deco"/><path class="wm-deco ws3ndf7es"/><path class="h5rxt79wz wm-deco"/><path class="d8hvsle5g"/><path class="xpahp5btp"/></g>`,
		"fallback": "withicons:thandai-blueprint",
	});
}

export default Component;
