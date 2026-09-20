import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsazsgp2q.css';
import '../../css/d/dkcwanadw.css';
import '../../css/m/mu0hyacnm.css';
import '../../css/p/pld31xy2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xsazsgp2q"/><path class="dkcwanadw"/><path class="mu0hyacnm"/><path class="pld31xy2s"/></g>`,
		"fallback": "streamline-cyber-color:sign-fragile-1",
	});
}

export default Component;
