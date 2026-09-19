import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mhckhccao.css';
import '../../css/r/rqk33033f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="mhckhccao"/><path class="rqk33033f"/></g>`,
		"fallback": "cryptocurrency-color:ion",
	});
}

export default Component;
