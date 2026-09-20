import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xbfmysp2p.css';
import '../../css/o/o019wez_i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xbfmysp2p"/><path class="o019wez_i"/></g>`,
		"fallback": "marketeq:jetski",
	});
}

export default Component;
