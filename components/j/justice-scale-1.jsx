import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_bseyb6n.css';
import '../../css/a/aupk9b4ty.css';
import '../../css/f/fbs5-_pyz.css';
import '../../css/r/rk1tazbgx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_bseyb6n"/><path class="aupk9b4ty"/><path class="fbs5-_pyz"/><path class="rk1tazbgx"/></g>`,
		"fallback": "streamline-flex-color:justice-scale-1",
	});
}

export default Component;
