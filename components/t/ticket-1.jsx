import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxxbc6bxw.css';
import '../../css/x/x4ov81bqg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxxbc6bxw"/><path class="x4ov81bqg"/></g>`,
		"fallback": "streamline-color:ticket-1",
	});
}

export default Component;
