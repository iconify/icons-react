import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xmdt8abhk.css';
import '../../css/u/uwb4o560p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xmdt8abhk"/><path class="uwb4o560p"/></g>`,
		"fallback": "hugeicons:shopping-basket-add-01",
	});
}

export default Component;
