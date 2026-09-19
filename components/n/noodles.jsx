import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mtbdbj_lh.css';
import '../../css/h/hm28x2bii.css';
import '../../css/q/qbcfqzbya.css';
import '../../css/d/daq-ng82l.css';
import '../../css/p/pjs_klbau.css';
import '../../css/d/dxz4-rb6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="mtbdbj_lh"/><path class="hm28x2bii"/><path class="qbcfqzbya"/><path class="daq-ng82l"/><path class="pjs_klbau"/><path class="dxz4-rb6a"/></g>`,
		"fallback": "icon-park:noodles",
	});
}

export default Component;
