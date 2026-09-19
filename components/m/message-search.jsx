import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/j/jctm5acci.css';
import '../../css/b/bzyfhwhwi.css';
import '../../css/n/n67jz7bok.css';
import '../../css/h/hv9dsxbbr.css';
import '../../css/p/p1b-dvsdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="jctm5acci"/><circle class="bzyfhwhwi"/><path class="n67jz7bok"/><path class="hv9dsxbbr"/><path class="p1b-dvsdg"/></g>`,
		"fallback": "icon-park:message-search",
	});
}

export default Component;
