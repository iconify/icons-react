import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3-6cmb1n.css';
import '../../css/c/cvxgdek1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q3-6cmb1n"/><path class="cvxgdek1w"/></g>`,
		"fallback": "reicon:security-user",
	});
}

export default Component;
