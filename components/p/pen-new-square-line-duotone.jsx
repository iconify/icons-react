import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p0hhklb3f.css';
import '../../css/g/g7zku0btl.css';
import '../../css/q/qairory2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p0hhklb3f"/><path class="g7zku0btl"/><path class="qairory2t"/></g>`,
		"fallback": "solar:pen-new-square-line-duotone",
	});
}

export default Component;
