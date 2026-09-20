import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/aj7ls7_-n.css';
import '../../css/l/lb2nr-bwd.css';
import '../../css/e/ez52l4bkr.css';
import '../../css/d/dyrcd-bsw.css';
import '../../css/i/i-s5vhb2l.css';
import '../../css/h/hqszsznzc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="aj7ls7_-n"/><path class="lb2nr-bwd"/><path class="ez52l4bkr"/></g><path clip-rule="evenodd" class="dyrcd-bsw"/><path class="i-s5vhb2l"/><path class="hqszsznzc"/></g>`,
		"fallback": "pepicons-print:speaker-high",
	});
}

export default Component;
