import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kr-sjdb-r.css';
import '../../css/f/fuv59z16n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kr-sjdb-r"/><path class="fuv59z16n"/></g>`,
		"fallback": "hugeicons:proportions",
	});
}

export default Component;
