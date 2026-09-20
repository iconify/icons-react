import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/va5vbhbva.css';
import '../../css/x/xrr-ko-pu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="va5vbhbva"/><path class="xrr-ko-pu"/></g>`,
		"fallback": "marketeq:suspension",
	});
}

export default Component;
