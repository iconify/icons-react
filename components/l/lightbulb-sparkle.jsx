import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpako4b1g.css';
import '../../css/a/a60u09dqj.css';
import '../../css/r/re3tyr71l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hpako4b1g"/><path class="a60u09dqj"/><path class="re3tyr71l"/></g>`,
		"fallback": "andrsrxn:lightbulb-sparkle",
	});
}

export default Component;
