import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tvdm8zb0k.css';
import '../../css/m/mdx9prbke.css';
import '../../css/o/o5_pmrv0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tvdm8zb0k"/><path class="mdx9prbke"/><path class="o5_pmrv0v"/></g>`,
		"fallback": "hugeicons:moon-01",
	});
}

export default Component;
