import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y84mz1woh.css';
import '../../css/t/tyy440mmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y84mz1woh"/><path class="tyy440mmu"/></g>`,
		"fallback": "andrsrxn:text-case-sensitive",
	});
}

export default Component;
