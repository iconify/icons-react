import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l18a0ac3j.css';
import '../../css/m/mz10oxp2y.css';
import '../../css/w/w1ucf4bqs.css';
import '../../css/z/zmnbfjhed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l18a0ac3j"/><path class="mz10oxp2y"/><circle class="w1ucf4bqs"/><circle class="zmnbfjhed"/></g>`,
		"fallback": "reicon:text-tool",
	});
}

export default Component;
