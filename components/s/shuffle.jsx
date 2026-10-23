import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/v10liebgr.css';
import '../../css/l/logcqs6mm.css';
import '../../css/t/t09m1vbqo.css';
import '../../css/l/lrea_p15f.css';
import '../../css/h/hcjzbcw_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="v10liebgr"/><path class="logcqs6mm"/><path class="t09m1vbqo"/><path class="lrea_p15f"/><path class="hcjzbcw_o"/></g>`,
		"fallback": "matita:shuffle",
	});
}

export default Component;
