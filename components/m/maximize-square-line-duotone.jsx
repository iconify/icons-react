import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hb6t3lb4p.css';
import '../../css/a/ajyuzgzsc.css';
import '../../css/l/lxnzn9nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hb6t3lb4p"/><path class="ajyuzgzsc"/><path class="lxnzn9nmw"/></g>`,
		"fallback": "solar:maximize-square-line-duotone",
	});
}

export default Component;
