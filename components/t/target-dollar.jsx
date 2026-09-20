import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7ch5-btn.css';
import '../../css/d/dplfhlbcd.css';
import '../../css/q/qwwylplcg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o7ch5-btn"/><path class="dplfhlbcd"/><path class="qwwylplcg"/></g>`,
		"fallback": "streamline-flex-color:target-dollar",
	});
}

export default Component;
