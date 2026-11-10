import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6tr8jbnr.css';
import '../../css/g/gomkjk-dj.css';
import '../../css/o/ogyt7d-0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6tr8jbnr"/><path class="gomkjk-dj"/><path class="ogyt7d-0c"/></g>`,
		"fallback": "andrsrxn:lightbulb-off",
	});
}

export default Component;
