import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zs0_f9bjo.css';
import '../../css/l/lpdptyvdz.css';
import '../../css/i/ioc2zcbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zs0_f9bjo"/><path class="lpdptyvdz"/><path class="ioc2zcbxm"/></g>`,
		"fallback": "streamline-cyber-color:smoke-free-area",
	});
}

export default Component;
