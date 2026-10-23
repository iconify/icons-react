import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/ifvat5bpg.css';
import '../../css/h/hhhhx_5qy.css';
import '../../css/p/phqcmtnia.css';
import '../../css/w/w5o_vxgzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ifvat5bpg"/><path class="hhhhx_5qy"/><path class="phqcmtnia"/><path class="w5o_vxgzl"/></g>`,
		"fallback": "matita:umbrella",
	});
}

export default Component;
