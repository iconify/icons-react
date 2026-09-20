import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/drlcw2b7v.css';
import '../../css/i/i37fxnbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="drlcw2b7v"/><path vector-effect="non-scaling-stroke" class="i37fxnbef"/></g>`,
		"fallback": "wordpress:sides-horizontal",
	});
}

export default Component;
