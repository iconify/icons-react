import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/au_n9lj7l.css';
import '../../css/z/zyfwq-cof.css';
import '../../css/v/vjzov1blj.css';
import '../../css/n/nlopadc2z.css';
import '../../css/e/eo0ysob7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="au_n9lj7l"/><path class="zyfwq-cof"/><path class="vjzov1blj"/><path class="nlopadc2z"/><path class="eo0ysob7e"/></g>`,
		"fallback": "solar:tea-cup-line-duotone",
	});
}

export default Component;
