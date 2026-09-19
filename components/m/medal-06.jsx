import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z7usppbvv.css';
import '../../css/l/l40iy_69f.css';
import '../../css/w/wx3_y2t5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z7usppbvv"/><circle class="l40iy_69f"/><path class="wx3_y2t5j"/></g>`,
		"fallback": "hugeicons:medal-06",
	});
}

export default Component;
