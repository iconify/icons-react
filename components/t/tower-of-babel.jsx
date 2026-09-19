import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cf12i2bxz.css';
import '../../css/r/ry9a-o47n.css';
import '../../css/n/nxner6fcl.css';
import '../../css/o/oiwhupulh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="cf12i2bxz"/><path class="ry9a-o47n"/><path class="nxner6fcl"/><path class="oiwhupulh"/></g>`,
		"fallback": "icon-park:tower-of-babel",
	});
}

export default Component;
