import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c-9xcgbvn.css';
import '../../css/k/kq_p2-bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c-9xcgbvn"/><path class="kq_p2-bpa"/></g>`,
		"fallback": "hugeicons:manager",
	});
}

export default Component;
