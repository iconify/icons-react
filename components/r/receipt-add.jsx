import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k7ry2_vew.css';
import '../../css/y/yk_u-tb_w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="k7ry2_vew"/><path class="yk_u-tb_w"/></g>`,
		"fallback": "marketeq:receipt-add",
	});
}

export default Component;
