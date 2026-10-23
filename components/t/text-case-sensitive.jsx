import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e-hl0mo1z.css';
import '../../css/q/qdoez9bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e-hl0mo1z"/><path class="qdoez9bzk"/></g>`,
		"fallback": "andrsrxn:text-case-sensitive",
	});
}

export default Component;
