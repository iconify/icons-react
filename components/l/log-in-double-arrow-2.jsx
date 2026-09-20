import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cm8y1-y0x.css';
import '../../css/h/hhijlij2o.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cm8y1-y0x"/><path class="hhijlij2o"/></g>`,
		"fallback": "marketeq:log-in-double-arrow-2",
	});
}

export default Component;
