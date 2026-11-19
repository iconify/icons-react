import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6y5mdbok.css';
import '../../css/z/zoa7apbzi.css';
import '../../css/d/dx4pim3ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6y5mdbok"/><path class="zoa7apbzi"/><path class="dx4pim3ez"/></g>`,
		"fallback": "andrsrxn:store-twenty-four",
	});
}

export default Component;
