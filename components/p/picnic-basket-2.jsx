import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/byt0x0bfe.css';
import '../../css/z/z-7w8-4_v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="byt0x0bfe"/><path class="z-7w8-4_v"/></g>`,
		"fallback": "marketeq:picnic-basket-2",
	});
}

export default Component;
