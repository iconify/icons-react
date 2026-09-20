import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/p_3kjzigc.css';
import '../../css/h/hk228-q0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="p_3kjzigc"/><path class="hk228-q0p"/></g>`,
		"fallback": "streamline-cyber:underwear-1",
	});
}

export default Component;
