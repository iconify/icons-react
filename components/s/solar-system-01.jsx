import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ksjkt6bmk.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/v/vj_1li4id.css';
import '../../css/n/nst6t7b4t.css';
import '../../css/w/wbom373wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ksjkt6bmk"/><circle class="p9vjoqtlo"/><circle class="xtsrmvj7o"/><circle class="vj_1li4id"/><path class="nst6t7b4t"/><path class="wbom373wg"/></g>`,
		"fallback": "hugeicons:solar-system-01",
	});
}

export default Component;
