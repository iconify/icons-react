import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmm42bchc.css';
import '../../css/w/w-olv5bzw.css';
import '../../css/e/esf9wtdqe.css';
import '../../css/h/hjjzs80tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qmm42bchc"/><path class="w-olv5bzw"/><path class="esf9wtdqe"/><path class="hjjzs80tx"/></g>`,
		"fallback": "lucide-extended:lock-keyhole-open-duotone",
	});
}

export default Component;
