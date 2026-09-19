import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbwa6_bla.css';
import '../../css/e/e6xfr6chp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rbwa6_bla"/><path class="e6xfr6chp"/></g>`,
		"fallback": "hugeicons:time-zone",
	});
}

export default Component;
