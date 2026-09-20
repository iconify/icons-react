import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zc2222d7e.css';
import '../../css/x/xsudc_icb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zc2222d7e"/><path class="xsudc_icb"/></g>`,
		"fallback": "reicon:money-send3-filled",
	});
}

export default Component;
