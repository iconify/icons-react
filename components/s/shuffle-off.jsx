import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c95kemb1j.css';
import '../../css/j/jt6hb71em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c95kemb1j"/><path class="jt6hb71em"/></g>`,
		"fallback": "andrsrxn:shuffle-off",
	});
}

export default Component;
