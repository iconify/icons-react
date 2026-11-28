import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z9h-83bpq.css';
import '../../css/a/adf1zybll.css';
import '../../css/n/nfk5u5bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z9h-83bpq"/><path class="adf1zybll"/><path class="nfk5u5bfg"/></g>`,
		"fallback": "iconaut:separator-horizontal-duo",
	});
}

export default Component;
