import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slj05mclm.css';
import '../../css/j/j2vlz6i-e.css';
import '../../css/i/ijrg4ewdu.css';
import '../../css/g/gnk34ph4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="slj05mclm"/><path clip-rule="evenodd" class="j2vlz6i-e"/><path class="ijrg4ewdu"/><path class="gnk34ph4t"/></g>`,
		"fallback": "streamline-freehand-color:shopping-cart-trolley-check",
	});
}

export default Component;
