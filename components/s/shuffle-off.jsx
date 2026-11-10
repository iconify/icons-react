import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjzqyub3e.css';
import '../../css/k/kd1kxab0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sjzqyub3e"/><path class="kd1kxab0e"/></g>`,
		"fallback": "andrsrxn:shuffle-off",
	});
}

export default Component;
