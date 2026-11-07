import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhqjkttpi.css';
import '../../css/e/e840iqbhy.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o45or_grw.css';
import '../../css/m/mn1kteeee.css';
import '../../css/o/okg4frbbd.css';
import '../../css/p/p5z7jhbua.css';
import '../../css/e/en6pytbpt.css';
import '../../css/d/dop-q2bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhqjkttpi"/><path class="e840iqbhy"/><g class="xtpeb-edw"><path class="o45or_grw"/><path class="mn1kteeee"/><path class="okg4frbbd"/><path class="p5z7jhbua"/><path class="en6pytbpt"/><path class="dop-q2bua"/></g>`,
		"fallback": "solar:volume-knob-bold-duotone",
	});
}

export default Component;
