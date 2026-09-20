import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f-bh_mprb.css';
import '../../css/c/c07q9b5pt.css';
import '../../css/z/zpd4nibtx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="f-bh_mprb"/><rect class="c07q9b5pt"/><rect class="zpd4nibtx"/></g>`,
		"fallback": "streamline:programming-module-three-code-three-module-programming-plugin",
	});
}

export default Component;
