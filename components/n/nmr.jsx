import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b08in11er.css';
import '../../css/g/g-rh-3b3g.css';
import '../../css/h/hh5f37fuo.css';
import '../../css/x/xsz_debyy.css';
import '../../css/m/mmbm_xbyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b08in11er"/><path class="g-rh-3b3g"/><path class="hh5f37fuo"/><path class="xsz_debyy"/><path class="mmbm_xbyy"/></g>`,
		"fallback": "icon-park:nmr",
	});
}

export default Component;
