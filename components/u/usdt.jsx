import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gjbjml9vz.css';
import '../../css/e/e59hm6z0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gjbjml9vz"/><path class="e59hm6z0z"/></g>`,
		"fallback": "hugeicons:usdt",
	});
}

export default Component;
