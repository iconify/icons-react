import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao6q-ib-y.css';
import '../../css/k/k7wjk5a_r.css';
import '../../css/l/l-ubx2v9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ao6q-ib-y"/><path class="k7wjk5a_r"/><path class="l-ubx2v9z"/></g>`,
		"fallback": "hugeicons:mail-lock-02",
	});
}

export default Component;
