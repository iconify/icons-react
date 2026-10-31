import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epdzdybxt.css';
import '../../css/d/dlzwojbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epdzdybxt"/><path class="dlzwojbyg"/></g>`,
		"fallback": "coolicons:lamp-bulk-round",
	});
}

export default Component;
