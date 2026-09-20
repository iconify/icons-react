import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l_3w4tbsp.css';
import '../../css/g/g3amwib_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l_3w4tbsp"/><path class="g3amwib_f"/></g>`,
		"fallback": "mynaui:shield-check",
	});
}

export default Component;
