import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t8_4ajb-f.css';
import '../../css/s/sx5b7tnuv.css';
import '../../css/v/vjp95jqxz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t8_4ajb-f"/><path class="sx5b7tnuv"/><path class="vjp95jqxz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:outbox-tray",
	});
}

export default Component;
