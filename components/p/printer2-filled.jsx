import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mp7_libon.css';
import '../../css/m/m0lg4ccxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mp7_libon"/><path class="m0lg4ccxu"/></g>`,
		"fallback": "reicon:printer2-filled",
	});
}

export default Component;
