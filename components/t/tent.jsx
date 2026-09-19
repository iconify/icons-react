import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bc9fff1ow.css';
import '../../css/t/trbgbga2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bc9fff1ow"/><path class="trbgbga2f"/></g>`,
		"fallback": "hugeicons:tent",
	});
}

export default Component;
