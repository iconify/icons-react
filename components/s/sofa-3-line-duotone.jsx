import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f7wfav4qm.css';
import '../../css/l/lbt5_vw5t.css';
import '../../css/t/tqcxtn8zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f7wfav4qm"/><path class="lbt5_vw5t"/><path class="tqcxtn8zv"/></g>`,
		"fallback": "solar:sofa-3-line-duotone",
	});
}

export default Component;
