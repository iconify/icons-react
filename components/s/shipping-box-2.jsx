import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e_z2m2b4a.css';
import '../../css/i/ippsmjb8q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e_z2m2b4a"/><path class="ippsmjb8q"/></g>`,
		"fallback": "marketeq:shipping-box-2",
	});
}

export default Component;
