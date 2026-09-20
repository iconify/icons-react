import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxc6vr24n.css';
import '../../css/t/t97kcpfjv.css';
import '../../css/j/jgjjp7t-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="mxc6vr24n"/><path class="t97kcpfjv"/><rect class="jgjjp7t-j"/></g>`,
		"fallback": "majesticons:user-box",
	});
}

export default Component;
