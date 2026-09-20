import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y0e2lx6gc.css';
import '../../css/t/tk71rtl3d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y0e2lx6gc"/><path class="tk71rtl3d"/></g>`,
		"fallback": "streamline:user-protection-2",
	});
}

export default Component;
