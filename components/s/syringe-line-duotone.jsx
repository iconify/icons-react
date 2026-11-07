import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/joszak3fu.css';
import '../../css/o/op08whwzy.css';
import '../../css/n/nhayq953l.css';
import '../../css/u/u-0xqcbuz.css';
import '../../css/a/ae44b6bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="joszak3fu"/><path class="op08whwzy"/><path class="nhayq953l"/><path class="u-0xqcbuz"/><path class="ae44b6bts"/></g>`,
		"fallback": "solar:syringe-line-duotone",
	});
}

export default Component;
