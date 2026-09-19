import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y0pnzz87o.css';
import '../../css/g/gdr62dbcz.css';
import '../../css/l/lnplwwnva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="y0pnzz87o"/><path class="gdr62dbcz"/><path class="lnplwwnva"/></g>`,
		"fallback": "hugeicons:soil-temperature-field",
	});
}

export default Component;
