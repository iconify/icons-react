import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-o4yc73d.css';
import '../../css/d/dvdnrccbz.css';
import '../../css/b/byzj04xen.css';
import '../../css/m/mwt1_zp3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-o4yc73d"/><path class="dvdnrccbz"/><path class="byzj04xen"/><path class="mwt1_zp3y"/></g>`,
		"fallback": "streamline-cyber-color:mouse",
	});
}

export default Component;
