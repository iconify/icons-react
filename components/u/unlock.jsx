import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h1a2cgb_l.css';
import '../../css/j/jcrjsgc_c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="h1a2cgb_l"/><path class="jcrjsgc_c"/></g>`,
		"fallback": "marketeq:unlock",
	});
}

export default Component;
