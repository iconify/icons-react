import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y6c2njxfw.css';
import '../../css/f/fblcspbrj.css';
import '../../css/z/zm1iwwu3y.css';
import '../../css/s/svisg_bqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y6c2njxfw"/><path clip-rule="evenodd" class="fblcspbrj"/><path clip-rule="evenodd" class="zm1iwwu3y"/><path class="svisg_bqo"/></g>`,
		"fallback": "streamline-color:transfer-motorcycle-flat",
	});
}

export default Component;
