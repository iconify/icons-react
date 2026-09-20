import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sq-6dcfcl.css';
import '../../css/e/e6agddb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="sq-6dcfcl"/><path class="e6agddb9r"/></g>`,
		"fallback": "proicons:toy-brick",
	});
}

export default Component;
