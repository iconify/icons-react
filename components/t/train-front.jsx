import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pkkrpvzse.css';
import '../../css/p/pvnxvnhrw.css';
import '../../css/q/qqm9ydb9o.css';
import '../../css/x/xvzcmmbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pkkrpvzse"/><path class="pvnxvnhrw"/><path class="qqm9ydb9o"/><path class="xvzcmmbio"/></g>`,
		"fallback": "hugeicons:train-front",
	});
}

export default Component;
