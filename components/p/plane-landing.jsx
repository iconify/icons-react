import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_mtbsbkj.css';
import '../../css/q/qnbygmbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path clip-rule="evenodd" class="o_mtbsbkj"/><path class="qnbygmbln"/></g>`,
		"fallback": "hugeicons:plane-landing",
	});
}

export default Component;
