import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sb4bkacax.css';
import '../../css/g/gcl-a3bkm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="sb4bkacax"/><path class="gcl-a3bkm"/></g>`,
		"fallback": "marketeq:rejected-file-2",
	});
}

export default Component;
