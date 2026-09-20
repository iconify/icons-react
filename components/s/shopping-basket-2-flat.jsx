import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pf6yf-bfk.css';
import '../../css/j/jh00mgd2o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pf6yf-bfk"/><path class="jh00mgd2o"/></g>`,
		"fallback": "streamline-color:shopping-basket-2-flat",
	});
}

export default Component;
