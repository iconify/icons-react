import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/chuykx04i.css';
import '../../css/h/hmd7vzbzg.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="chuykx04i"/><path class="hmd7vzbzg"/></g>`,
		"fallback": "marketeq:knife",
	});
}

export default Component;
