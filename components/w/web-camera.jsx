import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0zd44bsb.css';
import '../../css/e/eiqtcc5zo.css';
import '../../css/r/roth2bbre.css';
import '../../css/l/l4kec-0vm.css';
import '../../css/b/b8s31sbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0zd44bsb"/><path class="eiqtcc5zo"/><path class="roth2bbre"/><path class="l4kec-0vm"/><path class="b8s31sbus"/></g>`,
		"fallback": "streamline-cyber-color:web-camera",
	});
}

export default Component;
