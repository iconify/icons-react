import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cawk1qbvu.css';
import '../../css/t/txgmwub9o.css';
import '../../css/n/nhj7l2yrj.css';
import '../../css/y/yn5_00ilj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cawk1qbvu"/><path class="txgmwub9o"/><path class="nhj7l2yrj"/><path class="yn5_00ilj"/></g>`,
		"fallback": "lucide-extended:warehouse-duotone",
	});
}

export default Component;
