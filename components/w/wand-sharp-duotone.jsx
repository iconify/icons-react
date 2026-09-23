import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b38tdlapu.css';
import '../../css/q/qrcle2bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b38tdlapu"/><path class="qrcle2bnq"/></g>`,
		"fallback": "keyline-icons:wand-sharp-duotone",
	});
}

export default Component;
