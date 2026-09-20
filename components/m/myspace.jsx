import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wocayubks.css';
import '../../css/a/a736vpyzo.css';
import '../../css/w/w13dkpbts.css';
import '../../css/y/yvq_4gmso.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><ellipse class="wocayubks"/><path class="a736vpyzo"/><ellipse class="w13dkpbts"/><path class="yvq_4gmso"/></g>`,
		"fallback": "jam:myspace",
	});
}

export default Component;
