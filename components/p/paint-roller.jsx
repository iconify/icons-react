import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l04re6b8w.css';
import '../../css/f/f7d0b9b0h.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="l04re6b8w"/><path class="f7d0b9b0h"/></g>`,
		"fallback": "marketeq:paint-roller",
	});
}

export default Component;
