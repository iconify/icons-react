import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iug5p656n.css';
import '../../css/u/uk3sd_5em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iug5p656n"/><path class="uk3sd_5em"/></g>`,
		"fallback": "andrsrxn:pi",
	});
}

export default Component;
