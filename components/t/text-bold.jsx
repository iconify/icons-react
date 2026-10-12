import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u1iyo_ehf.css';
import '../../css/i/ikcfh-b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u1iyo_ehf"/><path class="ikcfh-b2n"/></g>`,
		"fallback": "andrsrxn:text-bold",
	});
}

export default Component;
