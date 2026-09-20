import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwde9-dfg.css';
import '../../css/l/lhndixb-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wwde9-dfg"/><path class="lhndixb-p"/></g>`,
		"fallback": "streamline-flex-color:lightbulb-flat",
	});
}

export default Component;
