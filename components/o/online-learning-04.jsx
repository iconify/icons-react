import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dtxlrvxsc.css';
import '../../css/r/rfr32g0zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dtxlrvxsc"/><path class="rfr32g0zd"/></g>`,
		"fallback": "hugeicons:online-learning-04",
	});
}

export default Component;
