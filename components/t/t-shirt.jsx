import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5kx_zt5a.css';
import '../../css/d/df_1v7hrx.css';
import '../../css/a/axk82gbzf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m5kx_zt5a"/><path clip-rule="evenodd" class="df_1v7hrx"/><path class="axk82gbzf"/></g>`,
		"fallback": "pepicons-print:t-shirt",
	});
}

export default Component;
