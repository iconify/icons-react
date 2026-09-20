import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/iig1o2bkc.css';
import '../../css/h/hmtd5ibay.css';
import '../../css/o/ogtgwab_d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="iig1o2bkc"/><path class="hmtd5ibay"/><path class="ogtgwab_d"/></g>`,
		"fallback": "marketeq:mountain",
	});
}

export default Component;
