import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qq07tqb-z.css';
import '../../css/o/ozhxnmbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qq07tqb-z"/><path class="ozhxnmbvl"/></g>`,
		"fallback": "hugeicons:rice-bowl-01",
	});
}

export default Component;
