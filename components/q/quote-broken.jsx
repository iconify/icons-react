import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxhb0zbtf.css';
import '../../css/t/tk8yg_b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lxhb0zbtf"/><path class="tk8yg_b-k"/></g>`,
		"fallback": "solar:quote-broken",
	});
}

export default Component;
