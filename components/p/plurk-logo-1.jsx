import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hwlsp3bub.css';
import '../../css/q/q0kq_jvgv.css';
import '../../css/c/ci_sy1rqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hwlsp3bub"/><path class="q0kq_jvgv"/><path class="ci_sy1rqc"/></g>`,
		"fallback": "streamline-logos:plurk-logo-1",
	});
}

export default Component;
