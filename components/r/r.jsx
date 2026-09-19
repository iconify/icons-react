import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-at2v-5h.css';
import '../../css/d/dqjexpbdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="s-at2v-5h"/><path class="dqjexpbdv"/></g>`,
		"fallback": "cryptocurrency-color:r",
	});
}

export default Component;
