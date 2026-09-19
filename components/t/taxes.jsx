import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ti89meu_q.css';
import '../../css/t/tse8fjn3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ti89meu_q"/><path class="tse8fjn3b"/></g>`,
		"fallback": "hugeicons:taxes",
	});
}

export default Component;
