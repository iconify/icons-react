import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tccps_hfg.css';
import '../../css/t/t5p9cvgat.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tccps_hfg"/><path class="t5p9cvgat"/></g>`,
		"fallback": "marketeq:toilet",
	});
}

export default Component;
