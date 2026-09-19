import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qzg5up68n.css';
import '../../css/t/tvwr4rb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qzg5up68n"/><path class="tvwr4rb_t"/></g>`,
		"fallback": "hugeicons:wallet-03",
	});
}

export default Component;
