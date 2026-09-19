import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ng0_lc9cp.css';
import '../../css/b/bvoh5acnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ng0_lc9cp"/><path class="bvoh5acnp"/></g>`,
		"fallback": "hugeicons:three-d-view",
	});
}

export default Component;
