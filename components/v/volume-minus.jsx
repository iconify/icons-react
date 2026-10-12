import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prr2mcb8x.css';
import '../../css/h/hiisiicmo.css';
import '../../css/e/erljhab3l.css';
import '../../css/g/gdf0stgap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prr2mcb8x"/><path class="hiisiicmo"/><path class="erljhab3l"/><path class="gdf0stgap"/></g>`,
		"fallback": "andrsrxn:volume-minus",
	});
}

export default Component;
