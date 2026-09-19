import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vwega_bod.css';
import '../../css/a/ahrbmubll.css';
import '../../css/k/kmxkex5-c.css';
import '../../css/m/mmd_h2bvz.css';
import '../../css/s/sp8biabka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vwega_bod"/><path class="ahrbmubll"/><path class="kmxkex5-c"/><path class="mmd_h2bvz"/><path class="sp8biabka"/></g>`,
		"fallback": "healthicons:medical-sample",
	});
}

export default Component;
