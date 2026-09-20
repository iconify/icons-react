import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c_b1mvitm.css';
import '../../css/z/zp4-jh3cm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c_b1mvitm"/><path class="zp4-jh3cm"/></g>`,
		"fallback": "marketeq:subway",
	});
}

export default Component;
