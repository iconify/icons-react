import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngzcridyo.css';
import '../../css/m/m-ctracsy.css';
import '../../css/z/zp6b71k1x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ngzcridyo"/><path class="m-ctracsy"/><path class="zp6b71k1x"/></g>`,
		"fallback": "streamline-color:tree-2",
	});
}

export default Component;
