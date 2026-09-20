import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk1qekz2p.css';
import '../../css/o/ofjjljbxm.css';
import '../../css/w/wgkdo3b1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pk1qekz2p"/><path class="ofjjljbxm"/><path class="wgkdo3b1i"/></g>`,
		"fallback": "streamline-kameleon-color:smartphone-duo",
	});
}

export default Component;
