import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sbcd_5tax.css';
import '../../css/u/ufu2_qb1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sbcd_5tax"/><path class="ufu2_qb1e"/></g>`,
		"fallback": "streamline-flex:investing-and-banking",
	});
}

export default Component;
