import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0rdw2byb.css';
import '../../css/p/pugpnab9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b0rdw2byb"/><path class="pugpnab9y"/></g>`,
		"fallback": "hugeicons:tongue",
	});
}

export default Component;
