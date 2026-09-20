import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9ln-r5qf.css';
import '../../css/l/lik3knb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9ln-r5qf"/><path class="lik3knb3o"/></g>`,
		"fallback": "solar:link-square-broken",
	});
}

export default Component;
