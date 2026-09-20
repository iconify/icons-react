import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k43-hyx6y.css';
import '../../css/c/cd7c2obwf.css';
import '../../css/j/j_v8op_ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k43-hyx6y"/><path class="cd7c2obwf"/><path class="j_v8op_ik"/></g>`,
		"fallback": "streamline-ultimate:picture-stack-landscape",
	});
}

export default Component;
