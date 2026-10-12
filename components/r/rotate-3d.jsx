import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/agdx2ybkl.css';
import '../../css/m/mp71g22pc.css';
import '../../css/g/gqp0k6bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="agdx2ybkl"/><path class="mp71g22pc"/><path class="gqp0k6bqr"/></g>`,
		"fallback": "andrsrxn:rotate-3d",
	});
}

export default Component;
