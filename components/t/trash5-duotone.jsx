import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/deu_htz4g.css';
import '../../css/a/at1ai5bbb.css';
import '../../css/s/su39-7f4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="deu_htz4g"/><path clip-rule="evenodd" class="at1ai5bbb"/><path class="su39-7f4f"/></g>`,
		"fallback": "reicon:trash5-duotone",
	});
}

export default Component;
