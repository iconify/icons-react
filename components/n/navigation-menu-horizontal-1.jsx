import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dtetowqlz.css';
import '../../css/q/q01rp0b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dtetowqlz"/><path class="q01rp0b1s"/></g>`,
		"fallback": "streamline-ultimate:navigation-menu-horizontal-1",
	});
}

export default Component;
