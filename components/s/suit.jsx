import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f_t_jwb1t.css';
import '../../css/p/pap0p3bpe.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="f_t_jwb1t"/><path class="pap0p3bpe"/></g>`,
		"fallback": "marketeq:suit",
	});
}

export default Component;
