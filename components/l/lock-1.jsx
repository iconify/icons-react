import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tyfklvbjm.css';
import '../../css/j/jcrjsgc_c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tyfklvbjm"/><path class="jcrjsgc_c"/></g>`,
		"fallback": "marketeq:lock-1",
	});
}

export default Component;
