import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/kq8vmd3dq.css';
import '../../css/u/ulvgorbtx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="kq8vmd3dq"/><path class="ulvgorbtx"/></g>`,
		"fallback": "marketeq:refresh-round",
	});
}

export default Component;
