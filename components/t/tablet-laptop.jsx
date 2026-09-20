import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j2ceu2b_w.css';
import '../../css/m/m47tg1piq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="j2ceu2b_w"/><path class="m47tg1piq"/></g>`,
		"fallback": "marketeq:tablet-laptop",
	});
}

export default Component;
