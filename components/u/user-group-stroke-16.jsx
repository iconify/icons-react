import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ohe7qpbin.css';
import '../../css/q/qgr3itvuc.css';
import '../../css/j/jse-wgbqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="ohe7qpbin"/><circle class="qgr3itvuc"/><path class="jse-wgbqj"/></g>`,
		"fallback": "garden:user-group-stroke-16",
	});
}

export default Component;
