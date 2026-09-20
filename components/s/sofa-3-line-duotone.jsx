import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xic0yhb9p.css';
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
		"content": `<g class="ipq1z-bjh"><path class="xic0yhb9p"/><path class="lbt5_vw5t"/><path class="tqcxtn8zv"/></g>`,
		"fallback": "solar:sofa-3-line-duotone",
	});
}

export default Component;
