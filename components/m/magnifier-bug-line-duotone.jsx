import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/i/ig7l8tpsj.css';
import '../../css/o/o3o_tvbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="r0xhknb7f"/><path class="ig7l8tpsj"/><path class="o3o_tvbax"/></g>`,
		"fallback": "solar:magnifier-bug-line-duotone",
	});
}

export default Component;
