import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p0_mz-d2j.css';
import '../../css/g/g2xrcsbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p0_mz-d2j"/><path class="g2xrcsbru"/></g>`,
		"fallback": "hugeicons:shopping-bag-check",
	});
}

export default Component;
