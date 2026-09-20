import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m3h3otklp.css';
import '../../css/t/t10y6eb2y.css';
import '../../css/j/jo7dc815i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m3h3otklp"/><path class="t10y6eb2y"/><path class="jo7dc815i"/></g>`,
		"fallback": "reicon:rotation",
	});
}

export default Component;
