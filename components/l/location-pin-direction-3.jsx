import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os9rpcbyr.css';
import '../../css/e/epr13ccau.css';
import '../../css/o/oicq10bvy.css';
import '../../css/g/g1imbdb_c.css';
import '../../css/p/p01bj4wck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="os9rpcbyr"/><path class="epr13ccau"/><path class="oicq10bvy"/><path class="g1imbdb_c"/><path class="p01bj4wck"/></g>`,
		"fallback": "streamline-cyber-color:location-pin-direction-3",
	});
}

export default Component;
