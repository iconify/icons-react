import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qtg504quk.css';
import '../../css/j/j6u4q-b2b.css';
import '../../css/w/wtktpgbca.css';
import '../../css/o/oxhorhz7x.css';
import '../../css/l/l879zsyvp.css';
import '../../css/n/n2acu5z3d.css';
import '../../css/r/rcuutebjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qtg504quk"/><path class="j6u4q-b2b"/><path class="wtktpgbca"/><path class="oxhorhz7x"/><path class="l879zsyvp"/><path class="n2acu5z3d"/><path class="rcuutebjc"/></g>`,
		"fallback": "solar:masks-linear",
	});
}

export default Component;
