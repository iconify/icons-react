import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtjkxs4jc.css';
import '../../css/o/ouc1l9qwb.css';
import '../../css/l/l8x8yogyg.css';
import '../../css/q/qt6hcj3lh.css';
import '../../css/d/dcgdlwb0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtjkxs4jc"/><path class="ouc1l9qwb"/><path class="l8x8yogyg"/><path class="qt6hcj3lh"/><path class="dcgdlwb0j"/>`,
		"fallback": "fxemoji:scroll",
	});
}

export default Component;
