import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a1uzfjbfw.css';
import '../../css/j/jb4o-fbmu.css';
import '../../css/p/p847-_yrq.css';
import '../../css/g/gucngzb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a1uzfjbfw"/><path class="jb4o-fbmu"/><circle class="p847-_yrq"/><path class="gucngzb6x"/></g>`,
		"fallback": "lets-icons:pils-light",
	});
}

export default Component;
