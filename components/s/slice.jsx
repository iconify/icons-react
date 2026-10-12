import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qztxuwbur.css';
import '../../css/q/q9jo5pbmy.css';
import '../../css/g/g2da-wk7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qztxuwbur"/><path class="q9jo5pbmy"/><path class="g2da-wk7l"/></g>`,
		"fallback": "andrsrxn:slice",
	});
}

export default Component;
