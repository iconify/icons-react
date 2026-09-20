import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tk2k528rk.css';
import '../../css/h/hv9o5bd6d.css';
import '../../css/o/ov-rvbc0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tk2k528rk"/><path class="hv9o5bd6d"/><path class="ov-rvbc0g"/></g>`,
		"fallback": "streamline:user-multiple-circle",
	});
}

export default Component;
