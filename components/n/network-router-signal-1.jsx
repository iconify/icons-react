import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g5wdafbtg.css';
import '../../css/i/imxfm0bju.css';
import '../../css/c/cnoj6sb3h.css';
import '../../css/r/rp2enwwxj.css';
import '../../css/q/q16o9rbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g5wdafbtg"/><path class="imxfm0bju"/><path class="cnoj6sb3h"/><path class="rp2enwwxj"/><path class="q16o9rbmu"/></g>`,
		"fallback": "streamline-freehand-color:network-router-signal-1",
	});
}

export default Component;
