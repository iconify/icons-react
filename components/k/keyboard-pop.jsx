import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc_8zr7vq.css';
import '../../css/l/la3fbtxxr.css';
import '../../css/o/o3hzj7bgp.css';
import '../../css/k/k54zgbbsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vc_8zr7vq"/><path class="la3fbtxxr"/><path class="o3hzj7bgp"/><path class="k54zgbbsu"/></g>`,
		"fallback": "streamline-kameleon-color:keyboard-pop",
	});
}

export default Component;
