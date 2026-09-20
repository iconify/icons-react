import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g2f0pu_0w.css';
import '../../css/b/bd6zcf_xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g2f0pu_0w"/><path class="bd6zcf_xv"/></g>`,
		"fallback": "streamline-ultimate:server-add",
	});
}

export default Component;
