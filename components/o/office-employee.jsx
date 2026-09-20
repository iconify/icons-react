import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9d0a1b9w.css';
import '../../css/x/xct77q-qp.css';
import '../../css/c/cxr4xpqru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r9d0a1b9w"/><path class="xct77q-qp"/><path class="cxr4xpqru"/></g>`,
		"fallback": "streamline-ultimate:office-employee",
	});
}

export default Component;
