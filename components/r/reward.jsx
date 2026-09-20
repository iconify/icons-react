import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l1knxgb9x.css';
import '../../css/t/tk5-g4bwa.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="l1knxgb9x"/><path class="tk5-g4bwa"/></g>`,
		"fallback": "marketeq:reward",
	});
}

export default Component;
