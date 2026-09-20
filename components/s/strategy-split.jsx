import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l81mmbb0d.css';
import '../../css/s/s0uio8bfy.css';
import '../../css/q/q9u26u22n.css';
import '../../css/o/ooq389b7i.css';
import '../../css/z/zylcysbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l81mmbb0d"/><path class="s0uio8bfy"/><path class="q9u26u22n"/><path class="ooq389b7i"/><path class="zylcysbgo"/></g>`,
		"fallback": "streamline-ultimate-color:strategy-split",
	});
}

export default Component;
