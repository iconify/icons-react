import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/qa63lgbzc.css';
import '../../css/d/d94q5jz_l.css';
import '../../css/c/cuiniwbro.css';
import '../../css/j/jlcyzeb2p.css';
import '../../css/r/r5ykmgbft.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="qa63lgbzc"/><path clip-rule="evenodd" class="d94q5jz_l"/></g><path clip-rule="evenodd" class="cuiniwbro"/><path class="jlcyzeb2p"/><path clip-rule="evenodd" class="r5ykmgbft"/></g>`,
		"fallback": "pepicons-print:money-note",
	});
}

export default Component;
