import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5-volb5j.css';
import '../../css/t/t97e-2uax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s5-volb5j"/><path class="t97e-2uax"/></g>`,
		"fallback": "hugeicons:robotic",
	});
}

export default Component;
