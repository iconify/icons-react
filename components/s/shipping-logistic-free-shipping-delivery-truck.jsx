import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g-0d1ab6q.css';
import '../../css/k/k9jvds0-b.css';
import '../../css/r/ritp03bwp.css';
import '../../css/m/mbug_m55z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g-0d1ab6q"/><path class="k9jvds0-b"/><path class="ritp03bwp"/><path class="mbug_m55z"/></g>`,
		"fallback": "streamline-ultimate:shipping-logistic-free-shipping-delivery-truck",
	});
}

export default Component;
