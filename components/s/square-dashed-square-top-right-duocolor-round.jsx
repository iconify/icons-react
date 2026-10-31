import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cka-s8b3p.css';
import '../../css/h/he65uacuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cka-s8b3p"/><path class="he65uacuo"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-right-duocolor-round",
	});
}

export default Component;
