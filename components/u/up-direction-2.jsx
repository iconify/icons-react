import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qj5ukwiyz.css';
import '../../css/m/mucq2g61i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qj5ukwiyz"/><path class="mucq2g61i"/></g>`,
		"fallback": "marketeq:up-direction-2",
	});
}

export default Component;
