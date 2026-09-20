import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mqm32dw3h.css';
import '../../css/s/s97a71b-k.css';
import '../../css/q/qp80nqbjd.css';
import '../../css/l/l2v6oqb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mqm32dw3h"/><path class="s97a71b-k"/><path class="qp80nqbjd"/><path class="l2v6oqb2w"/></g>`,
		"fallback": "solar:plate-bold-duotone",
	});
}

export default Component;
