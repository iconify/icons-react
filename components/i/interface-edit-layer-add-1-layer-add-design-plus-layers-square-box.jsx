import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k31ylacpy.css';
import '../../css/u/uuyuxtb7n.css';
import '../../css/x/x0vtc_lde.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k31ylacpy"/><rect class="uuyuxtb7n"/><path class="x0vtc_lde"/></g>`,
		"fallback": "streamline:interface-edit-layer-add-1-layer-add-design-plus-layers-square-box",
	});
}

export default Component;
