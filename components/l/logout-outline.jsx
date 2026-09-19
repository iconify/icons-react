import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiirhsbnc.css';
import '../../css/k/k-ib4_rmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiirhsbnc"/><path clip-rule="evenodd" class="k-ib4_rmv"/>`,
		"fallback": "basil:logout-outline",
	});
}

export default Component;
