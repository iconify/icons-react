import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qkgiqpx_n.css';
import '../../css/e/eyz0mcbyk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qkgiqpx_n"/><path class="eyz0mcbyk"/></g>`,
		"fallback": "streamline:trophy",
	});
}

export default Component;
