import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bgvnp7bwn.css';
import '../../css/l/l-14dvb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="bgvnp7bwn"/><path class="l-14dvb_g"/></g>`,
		"fallback": "streamline-cyber:programming-css3",
	});
}

export default Component;
