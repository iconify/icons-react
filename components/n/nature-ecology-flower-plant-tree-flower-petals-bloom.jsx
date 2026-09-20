import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h52z6y0kq.css';
import '../../css/u/uptbrubsm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><ellipse class="h52z6y0kq"/><path class="uptbrubsm"/></g>`,
		"fallback": "streamline:nature-ecology-flower-plant-tree-flower-petals-bloom",
	});
}

export default Component;
