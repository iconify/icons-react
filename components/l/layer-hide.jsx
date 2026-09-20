import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpvmq3bts.css';
import '../../css/b/bhn7_zeit.css';
import '../../css/v/vxk40tcob.css';
import '../../css/h/hi6zoubsd.css';
import '../../css/b/bwno5j-1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wpvmq3bts"/><path class="bhn7_zeit"/><path class="vxk40tcob"/><path class="hi6zoubsd"/><path class="bwno5j-1u"/></g>`,
		"fallback": "streamline-cyber-color:layer-hide",
	});
}

export default Component;
