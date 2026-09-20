import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/aiqem_btf.css';
import '../../css/k/kyn4k26ws.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="aiqem_btf"/><path class="kyn4k26ws"/></g>`,
		"fallback": "marketeq:jewelry",
	});
}

export default Component;
