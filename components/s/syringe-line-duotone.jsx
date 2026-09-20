import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d9mu1cbbd.css';
import '../../css/o/op08whwzy.css';
import '../../css/n/nhayq953l.css';
import '../../css/u/u-0xqcbuz.css';
import '../../css/g/gdy2bmbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d9mu1cbbd"/><path class="op08whwzy"/><path class="nhayq953l"/><path class="u-0xqcbuz"/><path class="gdy2bmbcj"/></g>`,
		"fallback": "solar:syringe-line-duotone",
	});
}

export default Component;
