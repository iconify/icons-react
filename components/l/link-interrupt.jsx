import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o9m_addyg.css';
import '../../css/b/bs_8sibuq.css';
import '../../css/m/mpa0ps6tr.css';
import '../../css/d/df50yhbge.css';
import '../../css/g/g8415ibcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="o9m_addyg"/><path class="bs_8sibuq"/><path class="mpa0ps6tr"/><path class="df50yhbge"/><path class="g8415ibcw"/></g>`,
		"fallback": "icon-park:link-interrupt",
	});
}

export default Component;
