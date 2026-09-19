import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pp5qdiblv.css';
import '../../css/q/q_qgjk5cj.css';
import '../../css/o/oetnrnv_h.css';
import '../../css/p/p4v64zugo.css';
import '../../css/z/z-jmuejpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pp5qdiblv"/><path class="q_qgjk5cj"/><path class="oetnrnv_h"/><path class="p4v64zugo"/><path class="z-jmuejpq"/></g>`,
		"fallback": "icon-park:parabola",
	});
}

export default Component;
