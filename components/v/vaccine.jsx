import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/ol5-wzh7y.css';
import '../../css/r/rqgi9hb-j.css';
import '../../css/t/to4lpd9vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ol5-wzh7y"/><path class="rqgi9hb-j"/><path class="to4lpd9vc"/></g>`,
		"fallback": "hugeicons:vaccine",
	});
}

export default Component;
