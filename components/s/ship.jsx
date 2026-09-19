import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rspufibjm.css';
import '../../css/c/c2-kgheqp.css';
import '../../css/b/bkhcefipx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rspufibjm"/><path class="c2-kgheqp"/><path class="bkhcefipx"/></g>`,
		"fallback": "hugeicons:ship",
	});
}

export default Component;
