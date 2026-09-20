import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dkfiplb5a.css';
import '../../css/l/ldy2vac_x.css';
import '../../css/s/sq6-6k6pw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dkfiplb5a"/><path class="ldy2vac_x"/><path class="sq6-6k6pw"/></g>`,
		"fallback": "marketeq:trophy",
	});
}

export default Component;
