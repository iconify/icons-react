import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/e/eldfi2bto.css';
import '../../css/n/n3wlgpj-n.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="eldfi2bto"/><path class="n3wlgpj-n"/></g>`,
		"fallback": "streamline-stickies-color:validation-1",
	});
}

export default Component;
