import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y8_o4fbpu.css';
import '../../css/u/uu44kpqap.css';
import '../../css/y/yox2jrpnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y8_o4fbpu"/><path class="uu44kpqap"/><path class="yox2jrpnp"/></g>`,
		"fallback": "streamline-freehand:ui-page-scroll",
	});
}

export default Component;
