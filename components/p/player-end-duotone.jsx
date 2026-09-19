import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yspteyi5k.css';
import '../../css/l/l88d503dg.css';
import '../../css/n/nkk3billd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yspteyi5k"/><path class="l88d503dg"/><path class="nkk3billd"/></g>`,
		"fallback": "iconamoon:player-end-duotone",
	});
}

export default Component;
