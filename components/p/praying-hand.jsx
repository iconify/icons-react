import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2b4-dugr.css';
import '../../css/b/b899kmvyi.css';
import '../../css/y/ynhj9080h.css';
import '../../css/v/vngl0mbeq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2b4-dugr"/><path class="b899kmvyi"/><path class="ynhj9080h"/><path class="vngl0mbeq"/></g>`,
		"fallback": "streamline-color:praying-hand",
	});
}

export default Component;
