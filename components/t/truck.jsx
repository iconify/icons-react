import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdfrzoi2g.css';
import '../../css/a/a0ho84xfv.css';
import '../../css/f/ftjyt3b6q.css';
import '../../css/a/a459qj40t.css';
import '../../css/h/hz0zevbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdfrzoi2g"/><path class="a0ho84xfv"/><circle transform="rotate(90 6.07 17.52)" class="ftjyt3b6q"/><circle transform="rotate(90 15.93 17.52)" class="a459qj40t"/><path class="hz0zevbjp"/></g>`,
		"fallback": "andrsrxn:truck",
	});
}

export default Component;
