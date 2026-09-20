import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g_dkpuykv.css';
import '../../css/n/n8b-tgbus.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="g_dkpuykv"/><path class="n8b-tgbus"/></g>`,
		"fallback": "marketeq:power",
	});
}

export default Component;
